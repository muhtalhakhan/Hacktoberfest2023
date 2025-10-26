import React, { useEffect } from 'react';

import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';

import './Modal.scss';

interface IModalProps {
  visible?: boolean;
  transition?: boolean;
  img?: string;
  title?: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
  onClose: () => void;
  shouldBgClose?: boolean;
  isScroll?: boolean;
  className?: string;
}

export const Modal = ({
  img = '',
  visible = false,
  title = '',
  content = '',
  footer = '',
  onClose,
  shouldBgClose = true,
  isScroll = false,
  transition = false,
  className = '',
}: IModalProps) => {
  const onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape' && visible) {
      onClose();
    }
  };

  useEffect(() => {
    visible
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`modal ${transition ? 'modal_delete' : ''}`}
      onClick={shouldBgClose ? onClose : undefined}
    >
      <div
        className={`modal__background ${className} ${
          transition ? 'modal__background_delete' : ''
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader onClose={onClose} imgSrc={img} />

        {content && (
          <ModalBody isScroll={isScroll} title={title}>
            {content}
          </ModalBody>
        )}

        {footer && <ModalFooter>{footer}</ModalFooter>}
      </div>
    </div>
  );
};
