const router = require('express').Router();
const aboutController = require('./authController');

/*************************** GET methods ***************************/
//render login page
router.get("/login", aboutController.renderLogin);

//render register page
router.get("/register", aboutController.renderRegister);

module.exports = router;