const router = require('express').Router();
const userController = require('./userController');
const upload = require("../../config/multer.config");

router.get('/profile', userController.getInfo);
router.get("/order", userController.renderOrder);

router.post("/profile", upload.single('avatar_url'), userController.changeAvatar);



module.exports = router;