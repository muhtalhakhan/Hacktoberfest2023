import React from 'react';

import { downloadSvg } from '../../../utils/functions/download.function';

import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useCreateCodeMutation } from '../../../store/code/codeApi';

import { Button } from '../../UI/Button/Button';

export const PreviewActions = () => {
  const [createCode] = useCreateCodeMutation();
  const { code, isTrack } = useTypedSelector((state) => state.code);

  const createCodeHandler = () => {
    if (code.link.length !== 0) {
      downloadSvg('.code__qr svg');
    }
  };

  const saveCodeHandler = async () => {
    if (code.link.length !== 0) {
      await createCode(code);
    }
  };

  return (
    <Button
      className={`generator__button button_blue button_default ${
        code.link !== '' ? '' : 'button_disabled'
      }`}
      clickHandler={() => (isTrack ? saveCodeHandler() : createCodeHandler())}
    >
      {isTrack ? 'Сохранить QR-код' : 'Скачать QR-код'}
    </Button>
  );
};
