const { body, validationResult } = require('express-validator');

const ApiError = require('../exceptions/api.exception');

const userAuthValidationRules = () => {
  return [
    body('email').isEmail(),
    body('password').isLength({ min: 8, max: 32 }),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  throw ApiError.badRequest('Ошибка валидации', errors.array());
};

module.exports = {
  userAuthValidationRules,
  validate,
};
