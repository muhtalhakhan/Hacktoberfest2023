import React, { useRef } from 'react';

import { downloadSvg } from '../../../utils/functions/download.function';

import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { useDeleteCodeMutation } from '../../../store/code/codeApi';

import { MenuPoints } from '../MenuPoints/MenuPoints';
import { Popup } from '../Popup/Popup';

interface ICardMenuProps {
  shortLink: string;
}

export const CardMenu = ({ shortLink }: ICardMenuProps) => {
  const [deleteCode] = useDeleteCodeMutation();

  const menuRef = useRef(null);
  const [isActive, setIsActive] = useOutsideClick(menuRef, false);

  const onClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsActive(!isActive);
  };

  const POPUP_LIST_PROFILE = [
    {
      onClick: () => {
        downloadSvg(`.qr${shortLink} svg`, `QRCODE-${shortLink}`);
        setIsActive(false);
      },
      icon: { name: 'download', size: 23 },
      children: 'Скачать',
    },
    {
      onClick: () => {
        deleteCode(shortLink);
        setIsActive(false);
      },
      icon: { name: 'delete', size: 23 },
      children: 'Удалить',
    },
  ];

  return (
    <Popup
      list={POPUP_LIST_PROFILE}
      ref={menuRef}
      isActive={isActive}
      onClick={onClick}
      buttonContent={<MenuPoints className="card__menu" />}
    />
  );
};
