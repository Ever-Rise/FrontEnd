import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  if (import.meta.env.DEV) {
    return <Outlet />;
  }

  const { isAuthenticated, deviceId } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to='/login' replace state={{ from: location }} />;
  }

  // Se ele está autenticado, mas não tem dispositivo, força a ir para a tela de vínculo.
  // (Certifique-se de que a rota '/vinculo-dispositivo' NÃO use o PrivateRoute, senão causará loop)
  if (!deviceId && location.pathname !== '/vinculo-dispositivo') {
    return <Navigate to='/vinculo-dispositivo' replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;