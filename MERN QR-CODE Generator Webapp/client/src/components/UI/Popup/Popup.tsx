/* eslint-disable react/display-name */
import React from 'react';

import { IIcons } from '../Icon/Icon';
import { PopupItem } from './PopupItem';

import './Popup.scss';

interface PopupItem {
  onClick: () => void;
  children: React.ReactNode;
  icon: IIcons;
}

interface IPopupProps {
  list: PopupItem[];
  isActive?: boolean;
  buttonContent?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
}

export const Popup = React.forwardRef<HTMLDivElement, IPopupProps>(
  ({ list, isActive, onClick, buttonContent, className = '' }, ref) => {
    return (
      <div ref={ref}>
        {buttonContent && (
          <button className="popup__button" onClick={onClick}>
            {buttonContent}
          </button>
        )}

        <div
          className={`popup-menu border ${className} ${
            isActive ? 'popup-menu_active' : 'popup-menu'
          }`}
        >
          {list.map((element, index) => (
            <PopupItem
              key={index + element.icon.name}
              onClick={element.onClick}
              icon={element.icon}
            >
              {element.children}
            </PopupItem>
          ))}
        </div>
      </div>
    );
  },
);
