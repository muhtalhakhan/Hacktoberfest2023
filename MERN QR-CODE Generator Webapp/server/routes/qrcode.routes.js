const Router = require('express').Router;

const QRCodeController = require('../controllers/qrcode.controller');
const authMiddleware = require('../middlewares/auth.middleware.js');

const router = new Router();

router.get('/', authMiddleware, QRCodeController.getQRCode);
router.post('/', authMiddleware, QRCodeController.createQRCode);
router.delete('/:shortLink', authMiddleware, QRCodeController.deleteQRCode);

module.exports = router;
