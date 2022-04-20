const router = require('express').Router();
const homepageController = require('./homepageController');

router.get('/', homepageController.getHomepage);

module.exports = router;