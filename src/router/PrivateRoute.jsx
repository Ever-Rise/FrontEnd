import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const { isAuthenticated, deviceId } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to='/login' replace state={{ from: location }} />;
  }

  if (!deviceId) {
    return <Navigate to='/vinculo-dispositivo' replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
