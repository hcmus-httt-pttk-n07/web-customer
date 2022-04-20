const router = require('express').Router();
const storeApiRouter = require('./store/storeApiRouter');

router.use('/store', storeApiRouter);

module.exports = router;