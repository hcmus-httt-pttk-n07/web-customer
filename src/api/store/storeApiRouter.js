const router = require('express').Router();
const storeController = require("./storeApiController");


router.get("/vaccine", storeController.getVaccine);
router.get("/package", storeController.getVaccinePackage);

router.post("/vaccine", storeController.addVaccineToCart);
router.post("/package", storeController.addPackageToCart);

module.exports = router;