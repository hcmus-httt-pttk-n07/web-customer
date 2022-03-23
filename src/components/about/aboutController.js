const router = require('express').Router();
const aboutController = require('./aboutRouter');

/*************************** GET methods ***************************/
//render login page
router.get("/about-us", aboutController.renderAboutUs);

module.exports = router;