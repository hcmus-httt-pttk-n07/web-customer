const router = require('express').Router();
const cartController = require('./cartController');

router.get("/register", cartController.renderRegister);
router.get("/buy", cartController.renderBuy);
router.get("/delete", cartController.delete);

module.exports = router;