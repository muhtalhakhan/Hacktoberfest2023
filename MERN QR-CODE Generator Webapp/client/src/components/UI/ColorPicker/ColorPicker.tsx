import React, { useEffect, useState } from 'react';

import './ColorPicker.scss';

interface IColorPickerProps {
  value: string;
  addItem: (value: string) => void;
  className?: string;
}

export const ColorPicker = ({
  value = '#ffffff',
  addItem,
  className = '',
}: IColorPickerProps) => {
  const [color, setColor] = useState(value);

  const handleChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;

    if (event.target.value.length > 7) {
      value = value.slice(0, -1);
    }

    setColor(value);
    addItem(value);
  };

  const isValidColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    let colorValue = event.target.value;

    if (!CSS.supports('color', colorValue)) {
      colorValue = '#ffffff';
    }

    setColor(colorValue);
    addItem(colorValue);
  };

  useEffect(() => setColor(value), [value]);

  return (
    <div className={`color-picker ${className}`}>
      <input
        type="color"
        className="color-picker__picker"
        value={color.toUpperCase()}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setColor(event.target.value)
        }
        onBlur={handleChangeColor}
      />
      <input
        type="text"
        className="color-picker__input input text border"
        value={color.toUpperCase()}
        onChange={handleChangeColor}
        onBlur={isValidColor}
        maxLength={7}
      />
    </div>
  );
};
