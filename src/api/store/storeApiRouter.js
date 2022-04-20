const storeController = require("./storeApiController");
const router = require('express').Router();

router.get("/vaccine", storeController.getVaccine);
router.get("/package", storeController.getVaccinePackage);

module.exports = router;