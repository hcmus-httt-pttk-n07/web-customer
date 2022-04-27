const router = require('express').Router();
const storeApiRouter = require('./store/storeApiRouter');
const userApiRouter = require('./user/userApiRouter');

router.use('/store', storeApiRouter);
router.use('/user', userApiRouter);

module.exports = router;