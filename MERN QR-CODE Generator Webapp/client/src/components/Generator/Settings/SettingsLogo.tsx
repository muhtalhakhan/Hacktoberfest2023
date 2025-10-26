import React, { useState, useEffect } from 'react';

import { convertToBase64 } from '../../../utils/functions/convertToBase64.function';
import { ACCEPTED_LOGO_FILE_TYPES } from '../../../utils/constants/generator.constant';

import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useModal } from '../../../hooks/useModal';

import { FilePreview } from '../../UI/FilePreview/FilePreview';
import { FileUpload } from '../../UI/FileUpload/FileUpload';
import { SettingsName } from './SettingsName';
import { ModalPro } from '../../shared/Modals/ModalPro';

export const SettingsLogo = () => {
  const [uploadFile, setUploadFile] = useState<File | null>();
  const {
    code: { logo },
  } = useTypedSelector((state) => state.code);
  const { isAuth } = useTypedSelector((state) => state.auth);
  const { setLogo, addToast } = useActions();
  const { isVisible, toggleVisible, transition } = useModal();

  const removeFile = () => {
    setLogo('');
    setUploadFile(null);
  };

  useEffect(() => {
    if (uploadFile) {
      convertToBase64(uploadFile, setLogo);
    }
  }, [uploadFile]);

  return (
    <div className="code-settings__items">
      <SettingsName className="code-settings__item_several" label="Ваш логотип">
        <div
          className="code-settings__option code-settings__upload"
          onClick={(event: React.MouseEvent) => {
            if (!isAuth) {
              event.preventDefault();
              toggleVisible();
            }
          }}
        >
          {logo.src === '' ? (
            <FileUpload
              uploadFile={setUploadFile}
              acceptFile={ACCEPTED_LOGO_FILE_TYPES}
              setMessage={addToast}
              isActive={isAuth}
              callbackArea={toggleVisible}
            />
          ) : (
            <FilePreview file={logo.src} onRemove={removeFile} />
          )}

          <ModalPro
            isVisible={isVisible}
            transition={transition}
            toggleVisible={toggleVisible}
          />
        </div>
      </SettingsName>
    </div>
  );
};
