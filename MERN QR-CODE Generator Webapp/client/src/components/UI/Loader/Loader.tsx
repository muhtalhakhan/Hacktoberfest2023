import React from 'react';

import './Loader.scss';

interface ILoaderProps {
  className?: string;
}

export const Loader = ({ className = '' }: ILoaderProps) => {
  return <div className={`loader ${className}`}></div>;
};
