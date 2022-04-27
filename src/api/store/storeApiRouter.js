const storeController = require("./storeApiController");
const router = require('express').Router();

router.get("/vaccine", storeController.getVaccine);
router.get("/package", storeController.getVaccinePackage);

router.post("/vaccine", storeController.addVaccineToCart);
router.post("/package", storeController.addPackageToCart);

module.exports = router;