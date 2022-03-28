const router = require('express').Router();
const aboutController = require('./aboutController');

/*************************** GET methods ***************************/
//render about page
router.get("/", aboutController.renderAboutUs);

module.exports = router;
