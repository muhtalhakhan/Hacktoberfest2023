import React from 'react';

import { useResendEmailMutation } from '../../store/auth/authApi';

import { Button } from '../UI/Button/Button';

interface IHeaderMessageProps {
  type?: string;
}

export const HeaderMessage = ({ type = 'error' }: IHeaderMessageProps) => {
  const [resendEmail] = useResendEmailMutation();
  return (
    <div className={`header__message message message_${type}`}>
      <div className="container">
        <div className="message__inner">
          <h2 className="message__title suptitle">
            Подтвердите адрес электронной почты, чтобы получить больше
            возможностей. Не получили письмо?&nbsp;
            <Button
              className="button button_transparent message__button"
              clickHandler={() => resendEmail()}
            >
              Переслать подтверждение
            </Button>
          </h2>
        </div>
      </div>
    </div>
  );
};
