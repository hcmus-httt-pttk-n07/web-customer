const router = require('express').Router();
const storeController = require('./storeController');

router.get("/", storeController.renderStore);
router.get("/vaccine/:id", storeController.renderDetail);
router.get("/vaccine-package/:id", storeController.renderPackageDetail);

module.exports = router;