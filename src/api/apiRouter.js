const router = require('express').Router();
const storeApiRouter = require('./store/storeApiRouter');
const userApiRouter = require('./user/userApiRouter');
const cartApiRouter = require('./cart/cartApiRouter');

router.use('/store', storeApiRouter);
router.use('/user', userApiRouter);
router.use('/cart', cartApiRouter);

module.exports = router;