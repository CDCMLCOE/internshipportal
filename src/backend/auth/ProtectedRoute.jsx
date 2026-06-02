import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const defaultRedirectFor = (role) => {
  if (role === 'industry') return '/';
  return '/';
};

const ProtectedRoute = ({ allowedRoles = [], redirectTo }) => {
  const { user } = useAuth();
  const location = useLocation();

  const safeAllowedRoles = Array.isArray(allowedRoles) ? allowedRoles : [];
  const defaultRole = safeAllowedRoles.length > 0 ? safeAllowedRoles[0] : undefined;

  if (!user || !safeAllowedRoles.includes(user.role)) {
    return (
      <Navigate
        to={redirectTo || (defaultRole ? defaultRedirectFor(defaultRole) : '/')}
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
