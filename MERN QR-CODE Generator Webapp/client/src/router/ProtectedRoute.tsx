import React from 'react';
import { Navigate } from 'react-router-dom';

import { LOGIN_PATH } from '../utils/constants/routes.constant';

import { useTypedSelector } from '../hooks/useTypedSelector';

interface IProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: IProtectedRouteProps) => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  if (!isAuth) {
    return <Navigate to={LOGIN_PATH} replace />;
  }

  return children;
};
