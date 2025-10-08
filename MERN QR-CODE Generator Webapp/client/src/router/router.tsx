import React from 'react';

import {
  CODES_PATH,
  GENERATOR_PATH,
  LOGIN_PATH,
  REGISTRATION_PATH,
} from '../utils/constants/routes.constant';

import { ProtectedRoute } from './ProtectedRoute';
import { GeneratorPage } from '../pages/GeneratorPage';
import { LoginPage } from '../pages/LoginPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { CodePage } from '../pages/CodePage';

export const APP_ROUTES = [
  { path: GENERATOR_PATH, element: <GeneratorPage /> },
  { path: LOGIN_PATH, element: <LoginPage /> },
  { path: REGISTRATION_PATH, element: <RegistrationPage /> },
  {
    path: CODES_PATH,
    element: (
      <ProtectedRoute>
        <CodePage />
      </ProtectedRoute>
    ),
  },
  { path: '*', element: <GeneratorPage /> },
];
