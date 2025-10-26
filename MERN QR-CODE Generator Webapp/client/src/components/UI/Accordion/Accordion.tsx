import React, { useState } from 'react';

import { AccordionBody } from './AccordionBody';
import { AccordionHeader } from './AccordionHeader';

import './Accordion.scss';

interface IAccordionProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export const Accordion = ({
  title,
  children,
  className = '',
}: IAccordionProps) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={
        clicked
          ? 'accordion accordion_active ' + className
          : 'accordion ' + className
      }
    >
      <AccordionHeader
        title={title}
        clicked={clicked}
        setClicked={setClicked}
      />
      <AccordionBody clicked={clicked}>{children}</AccordionBody>
    </div>
  );
};
