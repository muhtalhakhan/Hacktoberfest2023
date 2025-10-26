import React, { useRef } from 'react';

import { IToastMessage } from '../../../types/Toast';

import './FileUpload.scss';
import fileImg from '../../../assets/img/general/file.svg';

interface IFileUploadProps {
  uploadFile: (file: File) => void;
  maxFileSize?: number;
  acceptFile?: string[];
  className?: string;
  setMessage: (message: IToastMessage) => void;
  isActive?: boolean;
  callbackArea?: () => void;
}

export const FileUpload = ({
  uploadFile,
  maxFileSize = 5242880,
  acceptFile = [],
  className = '',
  setMessage,
  isActive = true,
  callbackArea,
}: IFileUploadProps) => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleUpload = () => {
    inputRef.current.click();
  };

  const isAcceptExt = (fileName: string) => {
    const extType = fileName.split('.').pop() || '';

    return acceptFile.includes(extType) || acceptFile.length === 0;
  };

  const handleNewFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isActive) {
      event.preventDefault();
      event.target.files = null;
      event.target.value = '';

      callbackArea && callbackArea();

      return;
    }

    const file = event.target.files || [];

    if (
      file.length &&
      file[0].size <= maxFileSize &&
      isAcceptExt(file[0].name)
    ) {
      uploadFile(file[0]);
      setMessage({
        id: Date.now(),
        type: 'success',
        text: 'Файл успешно добавлен',
      });
    } else {
      setMessage({
        id: Date.now(),
        type: 'error',
        text: 'Недопустимое разрешение файла',
      });
    }
  };

  return (
    <>
      <div className={`fileupload ${className}`}>
        <img className="fileupload__img" src={fileImg} alt="Загрузка" />
        <p className="fileupload__text text text_small">
          Перетащите ваш файл в эту область
        </p>
        <p className="fileupload__small text">или</p>
        <button
          className="button button_transparent fileupload__button"
          onClick={handleUpload}
        >
          Выберите файл на компьютере
        </button>

        <input
          type="file"
          className="fileupload__input"
          ref={inputRef}
          accept={'.' + acceptFile.join(', .')}
          onChange={handleNewFileUpload}
        />
      </div>
    </>
  );
};
