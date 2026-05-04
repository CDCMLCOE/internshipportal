import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const defaultRedirectFor = (role) => {
  if (role === 'industry') return '/industry';
  return '/';
};

const ProtectedRoute = ({ allowedRoles, redirectTo }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user || !allowedRoles.includes(user.role)) {
    return (
      <Navigate
        to={redirectTo || defaultRedirectFor(allowedRoles[0])}
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
