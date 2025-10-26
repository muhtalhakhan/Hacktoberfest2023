const Router = require('express').Router;

const LinkController = require('../controllers/link.controller');

const router = new Router();

router.get('/:link', LinkController.redirectLink);

module.exports = router;
