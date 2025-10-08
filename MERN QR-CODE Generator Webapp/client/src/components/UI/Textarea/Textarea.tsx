import React from 'react';

interface ITextareaProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  errors?: string;
  className?: string;
  [x: string]: any;
}

export const Textarea = ({
  placeholder = '',
  onChange,
  value,
  errors,
  className = '',
  ...rest
}: ITextareaProps) => {
  return (
    <textarea
      onChange={onChange}
      value={value}
      className={
        errors
          ? `input input_textarea ${className} input_error`
          : `input input_textarea ${className}`
      }
      placeholder={placeholder}
      {...rest}
    />
  );
};
