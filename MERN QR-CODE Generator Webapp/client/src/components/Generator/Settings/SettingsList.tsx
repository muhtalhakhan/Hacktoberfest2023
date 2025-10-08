import React from 'react';

import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { GENERATOR_TYPES } from '../../../utils/constants/generator.constant';

import { Accordion } from '../../UI/Accordion/Accordion';
import { Switcher } from '../../UI/Switcher/Switcher';
import { GeneratorSwitch } from '../GeneratorSwitch';
import { SettingsColor } from './SettingsColor';
import { SettingsLogo } from './SettingsLogo';
import { SettingsName } from './SettingsName';
import { SettingsTrack } from './SettingsTrack';

export const SettingsList = () => {
  const { code } = useTypedSelector((state) => state.code);
  const { setType } = useActions();

  return (
    <div className="code-settings border">
      <div className="code-settings__items">
        <SettingsName label="Тип кода">
          <Switcher
            items={GENERATOR_TYPES}
            selectedValue={code.style.type}
            className="code-settings__option"
            onClick={setType}
          />
        </SettingsName>

        <SettingsName
          className="code-settings__item_several"
          label={
            GENERATOR_TYPES.find((element) => element.value === code.style.type)
              ?.label || ''
          }
        >
          <div className="code-settings__option">
            <GeneratorSwitch />
          </div>

          <SettingsTrack />
        </SettingsName>

        <Accordion title="Цвет">
          <SettingsColor />
        </Accordion>

        <Accordion title="Логотип">
          <SettingsLogo />
        </Accordion>
      </div>
    </div>
  );
};
