import React from 'react';
import { Navigate } from 'react-router-dom';

import { CODES_PATH } from '../utils/constants/routes.constant';

import { useTypedSelector } from '../hooks/useTypedSelector';

import { AuthRegistration } from '../components/Auth/AuthRegistration';

export const RegistrationPage = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  return !isAuth ? <AuthRegistration /> : <Navigate to={CODES_PATH} />;
};
