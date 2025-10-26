export const EMAIL_VALIDATE = {
  required: {
    value: true,
    message: 'Это поле обязательное',
  },
  minLength: {
    value: 8,
    message: 'Минимальное количество символов - 8',
  },
  maxLength: {
    value: 64,
    message: 'Максимальное количество символов - 64',
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Невалидный адрес почты',
  },
};

export const PASSWORD_VALIDATE = {
  required: {
    value: true,
    message: 'Это поле обязательное',
  },
  minLength: {
    value: 8,
    message: 'Минимальное количество символов - 8',
  },
  maxLength: {
    value: 35,
    message: 'Максимальное количество символов - 35',
  },
};
