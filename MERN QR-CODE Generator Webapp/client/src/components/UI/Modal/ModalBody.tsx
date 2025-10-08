import React from 'react';

interface IModalBodyProps {
  isScroll: boolean;
  title?: string;
  children: React.ReactNode;
}

export const ModalBody = ({ isScroll, title, children }: IModalBodyProps) => {
  return (
    <div className={isScroll ? 'modal__body custom-scroll' : 'modal__body'}>
      <div className="modal__content">
        {title && <h3 className="modal__title subtitle">{title}</h3>}
        {children}
      </div>
    </div>
  );
};
