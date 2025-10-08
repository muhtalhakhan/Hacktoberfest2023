import React from 'react';

import { ICONS_COLOR_LIGHT_BLACK } from '../../../utils/constants/color.constant';

import { Icons } from '../Icon/Icon';

interface IModalHeaderProps {
  imgSrc?: string;
  onClose: () => void;
}

export const ModalHeader = ({ imgSrc, onClose }: IModalHeaderProps) => {
  return (
    <div className="modal__header">
      <span className="modal__close" onClick={onClose}>
        <Icons name="close" color={ICONS_COLOR_LIGHT_BLACK} size={12} />
      </span>
      {imgSrc && <img className="modal__img" src={imgSrc} />}
    </div>
  );
};
