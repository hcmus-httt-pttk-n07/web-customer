const router = require('express').Router();
const checkOutController = require('./orderController');

router.get("/buy", checkOutController.renderBuyOrder);
router.get("/success", checkOutController.renderSuccess);

router.post("/buy", checkOutController.orderByBuy);

module.exports = router;