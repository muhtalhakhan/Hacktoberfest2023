const QRCode = require('../models/QRCode');

const ApiError = require('../exceptions/api.exception');

class QRCodeService {
  async getAllCode(user) {
    const codes = await QRCode.find({ user: user.id });

    if (!user.isActivated) {
      await codes.map((code) => (code.transitions = 0));
    }

    return codes;
  }

  async createCode(id, code) {
    const isAlreadyCode = await QRCode.find({ shortLink: code.shortLink });

    if (isAlreadyCode.length !== 0) {
      throw ApiError.badRequest('Такой QR-код уже существует');
    }

    await QRCode.create({ ...code, user: id });
  }

  async deleteCode(userId, shortLink) {
    await QRCode.deleteOne({ user: userId, shortLink });
  }
}

module.exports = new QRCodeService();
