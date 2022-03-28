const router = require('express').Router();
const checkOutController = require('./check-outController');

/*************************** GET methods ***************************/
//render check out page
router.get("/", checkOutController.render);

//render success order page
router.get("/success", checkOutController.renderSuccess);

module.exports = router;