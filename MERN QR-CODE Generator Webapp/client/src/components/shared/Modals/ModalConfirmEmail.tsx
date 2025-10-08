import React from 'react';

import { useResendEmailMutation } from '../../../store/auth/authApi';

import { IModal } from '../../../types/ModalWindow';

import { Button } from '../../UI/Button/Button';
import { Modal } from '../../UI/Modal/Modal';

import img from '../../../assets/img/general/pro.png';

export const ModalConfirmEmail = ({
  isVisible,
  toggleVisible,
  transition,
}: IModal) => {
  const [resendEmail] = useResendEmailMutation();

  const resendEmailHandle = () => {
    resendEmail();
    toggleVisible();
  };

  return (
    <Modal
      img={img}
      title="Подтверждение адреса электронной почты"
      content={
        <p className="text text_small">
          Для полного доступа к приложению необходимо подтвердить адрес
          электронной почты
        </p>
      }
      footer={
        <>
          <Button
            clickHandler={() => toggleVisible()}
            className="button_secondary button_default"
          >
            Закрыть
          </Button>
          <Button
            clickHandler={resendEmailHandle}
            className="button_blue button_default"
          >
            Подтвердить
          </Button>
        </>
      }
      visible={isVisible}
      transition={transition}
      onClose={() => toggleVisible()}
    />
  );
};
