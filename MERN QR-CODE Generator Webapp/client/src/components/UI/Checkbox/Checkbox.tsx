import React from 'react';

import './Checkbox.scss';

interface ICheckboxProps {
  isChecked?: boolean;
  label: string;
  checkHandler?: () => void;
  index?: number;
  className?: string;
}

export const Checkbox = ({
  isChecked,
  label,
  checkHandler,
  index,
  className,
}: ICheckboxProps) => {
  return (
    <div className={`checkbox ${className}`}>
      <input
        type="checkbox"
        className="checkbox__input"
        id={`checkbox-${index}`}
        checked={isChecked}
        onChange={checkHandler}
      />
      <label className="checkbox__label text" htmlFor={`checkbox-${index}`}>
        {label}
      </label>
    </div>
  );
};
