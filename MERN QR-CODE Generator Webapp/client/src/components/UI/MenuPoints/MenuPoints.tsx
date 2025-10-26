import React from 'react';

import './MenuPoints.scss';

interface IMenuPointsProps {
  className?: string;
}

export const MenuPoints = ({ className = '' }: IMenuPointsProps) => {
  return (
    <div className={`points-menu ${className}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
