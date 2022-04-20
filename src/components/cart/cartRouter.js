const router = require('express').Router();
const cartController = require('./cartController');

/*************************** GET methods ***************************/
//render cart page
router.get("/register", cartController.renderRegister);
router.get("/buy", cartController.renderBuy);


module.exports = router;