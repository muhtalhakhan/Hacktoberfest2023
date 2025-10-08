import React from 'react';

import { ICONS_COLOR_BLACK } from '../../../utils/constants/color.constant';

import IconsSVG from '../../../assets/img/general/icons.svg';

export interface IIcons {
  name: string;
  color?: string;
  size?: number;
  className?: string;
}

export const Icons = ({
  name,
  color = ICONS_COLOR_BLACK,
  size = 16,
  className = '',
}: IIcons) => (
  <svg
    className={`icon icon-${name} ${className}`}
    stroke={color}
    width={size}
    height={size}
  >
    <use xlinkHref={`${IconsSVG}#${name}`} />
  </svg>
);
