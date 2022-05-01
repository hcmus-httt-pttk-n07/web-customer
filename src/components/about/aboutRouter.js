const router = require('express').Router();
const aboutController = require('./aboutController');

router.get("/", aboutController.renderAboutUs);

module.exports = router;
