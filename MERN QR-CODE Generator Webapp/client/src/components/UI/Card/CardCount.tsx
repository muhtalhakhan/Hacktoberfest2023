import React from 'react';

import { useModal } from '../../../hooks/useModal';

import { Button } from '../Button/Button';
import { ModalConfirmEmail } from '../../shared/Modals/ModalConfirmEmail';

interface ICardCountProps {
  count?: number;
  isCountVisible: boolean;
}

export const CardCount = ({ count = 0, isCountVisible }: ICardCountProps) => {
  const { isVisible, toggleVisible, transition } = useModal();

  return (
    <div className="card__count ">
      {isCountVisible ? (
        <p className="card__text text">{count} переходов</p>
      ) : (
        <>
          <Button className="card__info" clickHandler={() => toggleVisible()}>
            *** переходов
          </Button>

          <ModalConfirmEmail
            isVisible={isVisible}
            transition={transition}
            toggleVisible={toggleVisible}
          />
        </>
      )}
    </div>
  );
};
