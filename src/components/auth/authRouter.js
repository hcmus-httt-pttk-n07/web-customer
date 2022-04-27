const router = require('express').Router();
const authController = require('./authController');
const passport = require("../../config/passport.config");

router.get("/login", authController.renderLogin);
router.get("/register", authController.renderRegister);
router.get("/logout", authController.logout);

router.post("/register", authController.register);
router.post("/login", passport.authenticate('local', {
    successRedirect: '/', //login success, save user in req.user
    failureRedirect: '/auth/login?message=Dang%20Nhap%20That%20Bai' //login fail, redirect to login page
}));

module.exports = router;