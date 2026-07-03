import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  if (import.meta.env.DEV) {
    return <Outlet />;
  }

  // Removemos a importação e a checagem do deviceId
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to='/login' replace state={{ from: location }} />;
  }

  // Se passou pela autenticação, libera direto para o dashboard
  return <Outlet />;
};

export default PrivateRoute;