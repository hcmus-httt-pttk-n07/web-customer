const router = require('express').Router();
const cartController = require('./cartApiController');

router.post('/quantity/vaccine', cartController.changeQuantityVaccine);
router.post('/quantity/package', cartController.changeQuantityPackage);

router.post('/date/vaccine', cartController.changeDateVaccine);
router.post('/date/package', cartController.changeDatePackage);

router.post("/center/add", cartController.addCenter);
router.post("/center/del", cartController.delCenter);


module.exports = router;