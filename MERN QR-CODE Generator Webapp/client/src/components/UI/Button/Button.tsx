import React from 'react';

import { Icons, IIcons } from '../Icon/Icon';

import './Button.scss';

interface IButtonProps {
  className?: string;
  icon?: IIcons;
  clickHandler?: () => void;
  children: React.ReactNode;
}

export const Button = ({
  className = '',
  icon,
  clickHandler,
  children,
}: IButtonProps) => (
  <button
    type="button"
    className={`button ${className}`}
    onClick={clickHandler}
  >
    {icon ? <Icons {...icon} /> : ''}
    {children}
  </button>
);
