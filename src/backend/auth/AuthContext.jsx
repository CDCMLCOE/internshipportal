import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { supabase } from '../../backend/services/supabaseClient';

const SESSION_KEY = 'portal.session.v1';
const SESSION_TTL_MS = 8 * 60 * 60 * 1000;

// Development-only mock accounts (loaded from environment, not hardcoded)
// In production, this feature is disabled via import.meta.env.VITE_USE_MOCK_AUTH
const MOCK_ACCOUNTS = import.meta.env.VITE_USE_MOCK_AUTH === 'true' ? {
  student: [
    {
      email: 'student@mlcoe.mespune.in',
      password: 'student123',
      name: 'Student User',
      firstName: 'Student',
      lastName: 'User',
      prn: '2212345678',
      branch: 'B.Tech in Computer Engineering',
      institution: 'MES MLCOE',
    },
  ],
  admin: [
    {
      email: 'admin@mlcoe.in',
      password: 'admin123',
      name: 'Admin User',
    },
  ],
  industry: [
    { company: 'Google', password: 'google123' },
    { company: 'Microsoft', password: 'ms2024' },
    { company: 'Amazon', password: 'amzn456' },
    { company: 'Infosys', password: 'infosys789' },
    { company: 'Amazon', password: 'amzn' },
  ],
  superadmin: [
    {
      email: 'superadmin@mlcoe.in',
      password: 'superadmin123',
      name: 'Superadmin User',
    },
  ],
} : { student: [], admin: [], industry: [], superadmin: [] };

const AuthContext = createContext(null);

const isValidSession = (session) => {
  if (!session || typeof session !== 'object') return false;
  if (!['student', 'admin', 'industry', 'superadmin'].includes(session.role)) return false;
  if (!session.expiresAt || Date.now() > session.expiresAt) return false;
  if (session.role === 'industry' && !session.company) return false;
  return Boolean(session.name);
};

const readSession = () => {
  try {
    const raw = window.sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!isValidSession(parsed)) {
      window.sessionStorage.removeItem(SESSION_KEY);
      return null;
    }
    return parsed;
  } catch {
    window.sessionStorage.removeItem(SESSION_KEY);
    return null;
  }
};

const persistSession = (session) => {
  window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
};

const normalize = (value) => value.trim().toLowerCase();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(() => readSession());

  const loginPortalUser = useCallback(async ({ role, email, password }) => {
    if (import.meta.env.VITE_USE_MOCK_AUTH === 'true') {
      const accounts = MOCK_ACCOUNTS[role] || [];
      const account = accounts.find((candidate) => normalize(candidate.email) === normalize(email || ''));

      if (!account || account.password !== password) {
        return { ok: false, message: 'Invalid email or password.' };
      }

      const nextSession = {
        ...account,
        role,
        expiresAt: Date.now() + SESSION_TTL_MS,
      };
      persistSession(nextSession);
      setSession(nextSession);
      return { ok: true, session: nextSession };
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      return { ok: false, message: error.message };
    }

    const { data: profile } = await supabase.from('profiles').select('*').eq('id', data.user.id).single();

    const nextSession = {
      ...profile,
      email: data.user.email,
      name: profile?.name || data.user.email,
      role,
      expiresAt: Date.now() + SESSION_TTL_MS,
    };
    persistSession(nextSession);
    setSession(nextSession);
    return { ok: true, session: nextSession };
  }, []);

  const loginIndustry = useCallback(({ company, password }) => {
    const account = MOCK_ACCOUNTS.industry.find(
      (candidate) => normalize(candidate.company) === normalize(company || '')
    );

    if (!account || account.password !== password) {
      return { ok: false, message: 'Invalid company name or password.' };
    }

    const nextSession = {
      role: 'industry',
      name: account.company,
      company: account.company,
      expiresAt: Date.now() + SESSION_TTL_MS,
    };
    persistSession(nextSession);
    setSession(nextSession);
    return { ok: true, session: nextSession };
  }, []);

  const logout = useCallback(() => {
    window.sessionStorage.removeItem(SESSION_KEY);
    setSession(null);
  }, []);

  const value = useMemo(
    () => ({
      user: session,
      isAuthenticated: Boolean(session) && (!session?.expiresAt || Date.now() < session.expiresAt),
      loginPortalUser,
      loginIndustry,
      logout,
    }),
    [session, loginPortalUser, loginIndustry, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
};
