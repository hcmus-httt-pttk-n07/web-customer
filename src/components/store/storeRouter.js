const router = require('express').Router();
const storeController = require('./storeController');

/*************************** GET methods ***************************/
//render store page
router.get("/", storeController.renderStore);

//render product-detail page
router.get("/detail", storeController.renderDetail);

module.exports = router;