const router = require('express').Router();
const cartController = require('./cartApiController');

router.post('/vaccine', cartController.changeQuantityVaccine);
router.post('/package', cartController.changeQuantityPackage);

module.exports = router;