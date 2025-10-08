import React from 'react';

interface IAccordionBodyProps {
  clicked: boolean;
  children: React.ReactNode;
}

export const AccordionBody = ({ clicked, children }: IAccordionBodyProps) => {
  return (
    <div
      className="accordion__body"
      style={clicked ? { maxHeight: '1200px' } : { maxHeight: '0px' }}
    >
      <div className="accordion__content">{children}</div>
    </div>
  );
};
