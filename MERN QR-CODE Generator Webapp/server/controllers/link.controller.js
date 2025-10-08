const linkService = require('../services/link.service');

const ApiError = require('../exceptions/api.exception');

class LinkController {
  async redirectLink(req, res, next) {
    try {
      const { type, data } = await linkService.redirectTo(req.params.link);

      if (!data) {
        return next(ApiError.badRequest('Ссылка не найдена'));
      }

      if (type.toLowerCase() === 'url') {
        return res.redirect(data);
      } else {
        return res.json(data);
      }
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new LinkController();
