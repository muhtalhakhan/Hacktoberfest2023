import React from 'react';

interface IModalFooterProps {
  children: React.ReactNode;
}

export const ModalFooter = ({ children }: IModalFooterProps) => {
  return <div className="modal__footer">{children}</div>;
};
