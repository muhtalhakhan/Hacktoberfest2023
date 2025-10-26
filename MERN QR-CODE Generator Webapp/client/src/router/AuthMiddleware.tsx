import React from 'react';
import { useLocation } from 'react-router-dom';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { useCheckAuthQuery } from '../store/auth/authApi';

import { Loader } from '../components/UI/Loader/Loader';

interface IAuthMiddleware {
  children: JSX.Element | JSX.Element[];
}

export const AuthMiddleware = ({ children }: IAuthMiddleware): JSX.Element => {
  const { isAuth, token } = useTypedSelector((state) => state.auth);
  const location = useLocation();
  const { isFetching, isLoading } = useCheckAuthQuery(location.pathname, {
    skip: !(isAuth && token.exp < Date.now() / 1000),
    refetchOnMountOrArgChange: true,
  });

  if ((isLoading || isFetching) && isAuth) {
    return (
      <div className="main-loader">
        <Loader />
      </div>
    );
  } else {
    return <div className="transition-background">{children}</div>;
  }
};
