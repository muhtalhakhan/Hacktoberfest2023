import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
  DEFAULT_PATH,
  LOGIN_PATH,
} from '../../utils/constants/routes.constant';

import { useSignUpMutation } from '../../store/auth/authApi';

import { Button } from '../UI/Button/Button';
import { Icons } from '../UI/Icon/Icon';
import { AuthAction } from './AuthAction';
import { AuthInputs } from './AuthInputs';

import './Auth.scss';

export const AuthRegistration = () => {
  const { control, handleSubmit, setError } = useForm();
  const navigate = useNavigate();
  const [signUp] = useSignUpMutation();

  const signUpUser = async (data: any) => {
    await signUp(data)
      .unwrap()
      .then(() => navigate(DEFAULT_PATH))
      .catch((error) => {
        if (error.data.errors?.includes('not-find')) {
          setError('email', { type: 'custom', message: error.data.message });
        } else {
          setError('password', {
            type: 'custom',
            message: error.data.message,
          });
          setError('email', {
            type: 'custom',
            message: error.data.message,
          });
        }
      });
  };

  return (
    <div className="auth">
      <div className="auth__inner">
        <div className="auth__container">
          <button className="auth__logo" onClick={() => navigate(DEFAULT_PATH)}>
            <Icons name="logo" size={75} color="none" />
          </button>

          <h2 className="auth__title subtitle">Регистрация аккаунта</h2>
          <p className="auth__text text text_small">
            Создайте аккаунт, чтобы получить возможность сохранять и отслеживать
            свои QR-коды
          </p>

          <AuthInputs autoComplete="new-password" control={control} />

          <div className="auth__actions">
            <Button
              className="button_blue auth__button"
              clickHandler={handleSubmit(signUpUser)}
            >
              Создать аккаунт
            </Button>

            <AuthAction
              text="У вас уже есть аккаунт?"
              buttonText="Войти"
              onClick={() => navigate(LOGIN_PATH)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
