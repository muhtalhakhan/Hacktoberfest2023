import React from 'react';

import { useModal } from '../../../hooks/useModal';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { Checkbox } from '../../UI/Checkbox/Checkbox';
import { ModalPro } from '../../shared/Modals/ModalPro';

export const SettingsTrack = () => {
  const {
    code: { isTrack },
    auth: { isAuth },
  } = useTypedSelector((state) => state);
  const { setTrack } = useActions();
  const { isVisible, toggleVisible, transition } = useModal();

  const setTrackHandel = () => {
    if (!isAuth) {
      toggleVisible();
    } else {
      setTrack(!isTrack);
    }
  };

  return (
    <>
      <Checkbox
        isChecked={isTrack}
        label="Добавить отслеживание переходов"
        className="code-settings__checkbox"
        checkHandler={setTrackHandel}
      />

      <ModalPro
        isVisible={isVisible}
        transition={transition}
        toggleVisible={toggleVisible}
      />
    </>
  );
};
