import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
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
    { email: 'google@mlcoe.in', password: 'google123', name: 'Google', company: 'Google' },
    { email: 'microsoft@mlcoe.in', password: 'ms2024', name: 'Microsoft', company: 'Microsoft' },
    { email: 'amazon@mlcoe.in', password: 'amzn456', name: 'Amazon', company: 'Amazon' },
    { email: 'infosys@mlcoe.in', password: 'infosys789', name: 'Infosys', company: 'Infosys' },
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

    // Auto-migrate old industry sessions that were stored without the company field
    if (parsed.role === 'industry' && !parsed.company) {
      parsed.company = parsed.name || parsed.email || '';
      window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(parsed));
    }

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

  useEffect(() => {
    if (import.meta.env.VITE_USE_MOCK_AUTH === 'true') return;
    supabase.auth.getSession().then(({ data: { session: supabaseSession } }) => {
      if (!supabaseSession) {
        window.sessionStorage.removeItem(SESSION_KEY);
        setSession(null);
      }
    });
  }, []);

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
    return { ok: true, session: nextSession, mustChangePassword: profile?.must_change_password ?? false };
  }, []);

  const loginIndustry = useCallback(async ({ company, password }) => {
    const account = MOCK_ACCOUNTS.industry.find(
      (candidate) => normalize(candidate.name) === normalize(company || '')
    );

    if (!account) {
      return { ok: false, message: 'Invalid company name or password.' };
    }

    if (import.meta.env.VITE_USE_MOCK_AUTH === 'true') {
      if (account.password !== password) {
        return { ok: false, message: 'Invalid company name or password.' };
      }

      const nextSession = {
        role: 'industry',
        name: account.name,
        company: account.name,
        expiresAt: Date.now() + SESSION_TTL_MS,
      };
      persistSession(nextSession);
      setSession(nextSession);
      return { ok: true, session: nextSession };
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: account.email,
      password,
    });
    if (error) {
      return { ok: false, message: error.message };
    }

    const { data: profile } = await supabase.from('profiles').select('*').eq('id', data.user.id).single();

    const nextSession = {
      ...profile,
      email: data.user.email,
      name: profile?.name || account.name,
      company: profile?.name || account.name,
      role: 'industry',
      expiresAt: Date.now() + SESSION_TTL_MS,
    };
    persistSession(nextSession);
    setSession(nextSession);
    return { ok: true, session: nextSession };
  }, []);

  const changePassword = useCallback(async ({ newPassword }) => {
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) {
      return { ok: false, message: error.message };
    }

    const { error: profileError } = await supabase
      .from('profiles')
      .update({ must_change_password: false })
      .eq('id', session?.id);

    if (profileError) {
      return { ok: false, message: profileError.message };
    }

    const updatedSession = { ...session, must_change_password: false };
    persistSession(updatedSession);
    setSession(updatedSession);

    return { ok: true };
  }, [session]);

  const logout = useCallback(() => {
    window.sessionStorage.removeItem(SESSION_KEY);
    setSession(null);
    if (import.meta.env.VITE_USE_MOCK_AUTH !== 'true') {
      supabase.auth.signOut();
    }
  }, []);

  const value = useMemo(
    () => ({
      user: session,
      isAuthenticated: Boolean(session) && (!session?.expiresAt || Date.now() < session.expiresAt),
      loginPortalUser,
      loginIndustry,
      changePassword,
      logout,
    }),
    [session, loginPortalUser, loginIndustry, changePassword, logout]
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
