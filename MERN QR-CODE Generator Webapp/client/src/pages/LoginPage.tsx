import React from 'react';
import { Navigate } from 'react-router-dom';

import { CODES_PATH } from '../utils/constants/routes.constant';

import { useTypedSelector } from '../hooks/useTypedSelector';

import { AuthLogin } from '../components/Auth/AuthLogin';

export const LoginPage = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  return !isAuth ? <AuthLogin /> : <Navigate to={CODES_PATH} />;
};
