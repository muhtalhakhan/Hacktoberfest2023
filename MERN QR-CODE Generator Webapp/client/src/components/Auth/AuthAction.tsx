import React from 'react';

import { Button } from '../UI/Button/Button';

interface IAuthAction {
  text: string;
  buttonText: string;
  onClick: () => void;
}

export const AuthAction = ({ text, buttonText, onClick }: IAuthAction) => {
  return (
    <div className="auth__signup signup">
      <p className="signup__text text text_small">{text}</p>
      <Button
        className="button_transparent signup__button"
        clickHandler={onClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};
