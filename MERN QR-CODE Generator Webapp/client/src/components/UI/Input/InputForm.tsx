import React from 'react';
import { Controller, Control } from 'react-hook-form';

import { Input } from './Input';

import './InputForm.scss';

interface IInputFormProps {
  control: Control;
  name: string;
  rules?: any;
  label?: string;
  className?: string;
  [rest: string]: any;
}

export const InputForm = ({
  control,
  className = '',
  label,
  name,
  rules,
  ...rest
}: IInputFormProps) => (
  <div className={`form ${className}`}>
    {label && <h4 className="form__label subtitle">{label}</h4>}
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <Input
            error={!!error}
            onChange={onChange}
            value={value || ''}
            className="input form__input"
            {...rest}
          />
          {error && <p className="form__error">{error?.message || 'Ошибка'}</p>}
        </>
      )}
    />
  </div>
);
