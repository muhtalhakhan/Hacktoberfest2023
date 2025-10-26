import React from 'react';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { Toast } from '../UI/Toast/Toast';

export const Notification = () => {
  const { message } = useTypedSelector((state) => state.toast);
  const { deleteToast } = useActions();

  return (
    <div className="toast-wrapper">
      {message.length !== 0 &&
        message
          .slice(0, 10)
          .map((element) => (
            <Toast
              key={element.id}
              id={element.id}
              type={element.type}
              text={element.text}
              deleteItem={() => deleteToast(element.id)}
            />
          ))}
    </div>
  );
};
