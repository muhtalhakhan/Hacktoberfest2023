import React from 'react';

interface IInputProps {
  placeholder?: string;
  error?: boolean | string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
  type?: string;
  [rest: string]: any;
}

export const Input = ({
  placeholder = '',
  error,
  onChange,
  value,
  className = '',
  type = 'text',
  ...rest
}: IInputProps) => (
  <input
    type={type}
    onChange={onChange}
    value={value}
    className={error ? `input input_error ${className}` : `input ${className}`}
    placeholder={placeholder}
    {...rest}
  />
);
