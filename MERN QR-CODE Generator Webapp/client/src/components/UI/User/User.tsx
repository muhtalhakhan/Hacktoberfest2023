import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../../../store/auth/authApi';

import { CODES_PATH } from '../../../utils/constants/routes.constant';

import { Icons } from '../Icon/Icon';
import { Popup } from '../Popup/Popup';

import './User.scss';

interface IUserProps {
  name?: string;
  className?: string;
}

export const User = ({ name = 'U', className = '' }: IUserProps) => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const menuItems = [
    {
      onClick: () => navigate(CODES_PATH),
      icon: { name: 'qrcode', size: 23 },
      children: 'Мой QR-коды',
    },
    {
      onClick: async () => {
        await logout();
      },
      icon: { name: 'logout', size: 23 },
      children: 'Выйти',
    },
  ];

  return (
    <div className={`user ${className}`}>
      <div className="user__container" onClick={() => navigate(CODES_PATH)}>
        <div className="user__img">
          <p className="user__letter">{name.slice(0, 1)}</p>
        </div>
        <Icons name="arrow" size={12} className="user__arrow" />
      </div>

      <Popup list={menuItems} className="user__popup" />
    </div>
  );
};
