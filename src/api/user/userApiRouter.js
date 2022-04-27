const router = require("express").Router();
const userApiController = require("./userApiController");

router.post("/profile", userApiController.editProfile);

module.exports = router;