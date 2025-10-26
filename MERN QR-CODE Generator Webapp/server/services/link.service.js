const QRCode = require('../models/QRCode');

class LinkService {
  async redirectTo(shortLink) {
    const code = await QRCode.findOne({ shortLink });

    if (code) {
      code.transitions++;
      await code.save();

      return { type: code.style.type, data: code.link };
    }

    return null;
  }
}

module.exports = new LinkService();
