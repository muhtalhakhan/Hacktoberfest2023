import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store/store';

import { AuthMiddleware } from './router/AuthMiddleware';

import { AppRouter } from './router/AppRouter';
import { Header } from './components/Header/Header';
import { Notification } from './components/Notification/Notification';

import './assets/styles/style.scss';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Notification />
        <AuthMiddleware>
          <Header />
          <AppRouter />
        </AuthMiddleware>
      </BrowserRouter>
    </Provider>
  );
};
