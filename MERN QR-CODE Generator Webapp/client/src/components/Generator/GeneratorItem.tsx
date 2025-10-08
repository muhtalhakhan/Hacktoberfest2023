import React from 'react';

interface IGeneratorItemProps {
  title: string;
  buttonAction?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const GeneratorItem = ({
  title,
  buttonAction,
  children,
  className = '',
}: IGeneratorItemProps) => {
  return (
    <div className={`generator__item ${className}`}>
      <div className="generator__action">
        <h3 className="generator__text text text_small">{title}</h3>
        {buttonAction}
      </div>

      {children}
    </div>
  );
};
