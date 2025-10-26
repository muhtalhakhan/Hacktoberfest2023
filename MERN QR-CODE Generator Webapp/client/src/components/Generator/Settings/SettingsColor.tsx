import React from 'react';

import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { ColorPicker } from '../../UI/ColorPicker/ColorPicker';
import { SettingsName } from './SettingsName';

export const SettingsColor = () => {
  const { setBackgroundColor, setPatternColor } = useActions();
  const { code } = useTypedSelector((state) => state.code);

  return (
    <div className="code-settings__items">
      <SettingsName label="Цвет паттерна">
        <ColorPicker
          value={code.style.patternColor}
          addItem={(value) => setPatternColor(value)}
          className="code-settings__option"
        />
      </SettingsName>

      <SettingsName label="Цвет фона">
        <ColorPicker
          value={code.style.bgColor}
          addItem={(value) => setBackgroundColor(value)}
          className="code-settings__option"
        />
      </SettingsName>
    </div>
  );
};
