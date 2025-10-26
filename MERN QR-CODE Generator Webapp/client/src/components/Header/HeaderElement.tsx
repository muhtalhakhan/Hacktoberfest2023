import React from 'react';
import { Link } from 'react-router-dom';

import { LOGIN_PATH } from '../../utils/constants/routes.constant';

import { useTypedSelector } from '../../hooks/useTypedSelector';

import { User } from '../UI/User/User';

export const HeaderElement = () => {
  const {
    isAuth,
    user: { email },
  } = useTypedSelector((state) => state.auth);

  return (
    <div className="header__elements">
      {!isAuth ? (
        <Link to={LOGIN_PATH} className="button button_blue button_default">
          Войти
        </Link>
      ) : (
        <User name={email} />
      )}
    </div>
  );
};
