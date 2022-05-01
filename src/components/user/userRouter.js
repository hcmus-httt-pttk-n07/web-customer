const router = require('express').Router();
const userController = require('./userController');
const upload = require("../../config/multer.config");

router.get('/profile', userController.getInfo);
router.get('/schedules',userController.renderSchedule);

router.post("/profile", upload.single('avatar_url'), userController.changeAvatar);

// Order
router.get("/order", userController.renderBill);

module.exports = router;