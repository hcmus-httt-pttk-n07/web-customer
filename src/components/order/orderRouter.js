const router = require('express').Router();
const checkOutController = require('./orderController');

router.get("/buy", checkOutController.renderBuyOrder);
router.get("/register", checkOutController.renderRegisterOrder);

router.get("/buy/success", checkOutController.renderBuySuccess);
router.get("/register/success", checkOutController.renderRegisterSuccess);

router.post("/buy", checkOutController.orderForBuy);
router.post("/register", checkOutController.orderForRegister);

module.exports = router;