import React from 'react';

import { Button } from '../Button/Button';

import './FilePreview.scss';

interface IFilePreviewProps {
  file: string;
  fileName?: string;
  onRemove: () => void;
  className?: string;
}

export const FilePreview = ({
  file,
  fileName = 'Изображение загружено',
  onRemove,
  className = '',
}: IFilePreviewProps) => {
  return (
    <div className={`filepreview ${className}`}>
      <div className="filepreview__img">
        <img src={file} alt="QRCode Logo" />
      </div>
      <div className="filepreview__container">
        <div className="filepreview__info">
          <p className="filepreview__name text text_small">{fileName}</p>
        </div>
        <div className="filepreview__option">
          <Button
            className="button_red filepreview__button"
            clickHandler={onRemove}
          >
            Удалить
          </Button>
        </div>
      </div>
    </div>
  );
};
