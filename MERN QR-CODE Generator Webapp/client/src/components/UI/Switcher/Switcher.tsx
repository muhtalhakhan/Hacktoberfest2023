import React from 'react';

import { IGeneratorType } from '../../../utils/constants/generator.constant';

import './Switcher.scss';

interface ISwitcherProps {
  items: IGeneratorType[];
  selectedValue: string;
  onClick: (value: string) => void;
  className?: string;
}

export const Switcher = ({
  items,
  selectedValue,
  className = '',
  onClick,
}: ISwitcherProps) => {
  return (
    <div className={`switch__container ${className}`}>
      {items.map((type) => (
        <button
          key={type.value}
          onClick={() => onClick(type.value)}
          className={
            type.value === selectedValue
              ? 'suptitle switch__button switch__button_active'
              : 'suptitle switch__button'
          }
        >
          {type.label}
        </button>
      ))}
    </div>
  );
};
