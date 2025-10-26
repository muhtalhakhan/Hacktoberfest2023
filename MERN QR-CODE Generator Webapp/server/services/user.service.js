const argon2 = require('argon2');
const uuid = require('uuid');

const ApiError = require('../exceptions/api.exception');

const User = require('../models/User');
const mailService = require('./mail.service');
const tokenService = require('./token.service');

const UserDto = require('../dtos/user.dto');

class UserService {
  async registration(email, password) {
    const candidate = await User.findOne({ email });

    if (candidate) {
      throw ApiError.badRequest('Такая учетная запись уже существует', [
        'not-find',
      ]);
    }

    const hashedPassword = await argon2.hash(password, 12);
    const activationLink = uuid.v4();
    const user = await User.create({
      email,
      password: hashedPassword,
      activationLink,
    });

    const userInfo = this.createTokens(user);

    return userInfo;
  }

  async login(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
      throw ApiError.badRequest('Неверные данные');
    }

    const isPassEquals = await argon2.verify(user.password, password);

    if (!isPassEquals) {
      throw ApiError.badRequest('Неверные данные');
    }

    const userInfo = this.createTokens(user);

    return userInfo;
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);

    return token;
  }

  async resendMailConfirmation(email) {
    const user = await User.findOne({ email });

    if (!user) {
      throw ApiError.badRequest('Некорректные данные');
    }

    mailService.sendActivationMail(
      email,
      `${process.env.BASE_URL}/api/auth/activate/${user.activationLink}`,
    );

    return { message: 'Сообщение отправлено' };
  }

  async activate(activationLink) {
    const user = await User.findOne({ activationLink });

    if (!user) {
      throw ApiError.badRequest('Некорректная ссылка активации');
    }

    user.isActivated = true;
    await user.save();
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.unauthorizedError();
    }

    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDb) {
      throw ApiError.unauthorizedError();
    }

    const user = await User.findById(userData.id);
    const userInfo = this.createTokens(user);

    return userInfo;
  }

  async createTokens(user) {
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { user: userDto, ...tokens };
  }
}

module.exports = new UserService();
