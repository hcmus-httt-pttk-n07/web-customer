const router = require('express').Router();
const contactController = require('./contactController');

/*************************** GET methods ***************************/
//render contact page
router.get("/", contactController.render);

module.exports = router;