const router = require('express').Router();
const cartController = require('./cartController');

/*************************** GET methods ***************************/
//render cart page
router.get("/register", cartController.renderRegister);
router.get("/buy", cartController.renderBuy);
router.get("/delete", cartController.delete);


module.exports = router;