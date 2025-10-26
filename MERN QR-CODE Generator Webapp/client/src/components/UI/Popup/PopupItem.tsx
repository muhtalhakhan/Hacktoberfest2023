import React from 'react';

import { Icons, IIcons } from '../Icon/Icon';

export interface IPopupItemProps {
  icon?: IIcons;
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const PopupItem = ({
  icon,
  onClick,
  className = '',
  children,
}: IPopupItemProps) => {
  return (
    <div className={`popup-menu__item ${className}`} onClick={onClick}>
      {icon && (
        <Icons name={icon.name} size={icon.size} className="popup-menu__icon" />
      )}

      <div className="popup-menu__text text text_small">{children}</div>
    </div>
  );
};
