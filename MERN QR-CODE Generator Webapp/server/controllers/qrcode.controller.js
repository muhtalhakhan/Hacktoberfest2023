const QRCodeService = require('../services/qrcode.service');

class QRCodeController {
  async getQRCode(req, res, next) {
    try {
      const codes = await QRCodeService.getAllCode(req.user);

      return res.json(codes);
    } catch (e) {
      next(e);
    }
  }

  async createQRCode(req, res, next) {
    try {
      const code = await QRCodeService.createCode(req.user.id, req.body);

      return res.json(code);
    } catch (e) {
      next(e);
    }
  }

  async deleteQRCode(req, res, next) {
    try {
      const code = await QRCodeService.deleteCode(
        req.user.id,
        req.params.shortLink,
      );

      return res.json(code);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new QRCodeController();
