import React from 'react';

import { ICONS_COLOR_BLACK } from '../../../utils/constants/color.constant';

import { Icons } from '../Icon/Icon';

interface IAccordionHeaderProps {
  clicked: boolean;
  setClicked: (value: boolean) => void;
  title: string;
}

export const AccordionHeader = ({
  clicked,
  setClicked,
  title,
}: IAccordionHeaderProps) => {
  return (
    <div
      className={
        clicked
          ? 'accordion__header accordion__header_active'
          : 'accordion__header'
      }
      onClick={() => setClicked(!clicked)}
    >
      <h3 className="accordion__title">{title}</h3>
      <Icons
        name="arrow"
        color={ICONS_COLOR_BLACK}
        size={16}
        className="accordion__icon"
      />
    </div>
  );
};
