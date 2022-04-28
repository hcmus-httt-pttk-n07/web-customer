const cartService = require('../../components/cart/cartService');
const cartUtils = require('../../components/cart/cartUtils');

module.exports.changeQuantityVaccine = async (req, res) => {
    try {
        await cartService.changeQuantityVaccine(req.user, req.body.id, req.body.quantity);
        const total = await cartUtils.getTotal(req.user.CartVaccine, req.user.CartPackage);
        const quantity = await cartUtils.getQuantity(req.user.CartVaccine, req.user.CartPackage);
        res.status(200).send({total, quantity});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports.changeQuantityPackage = async (req, res) => {
    try {
        await cartService.changeQuantityPackage(req.user, req.body.id, req.body.quantity);
        const total = await cartUtils.getTotal(req.user.CartVaccine, req.user.CartPackage);
        const quantity = await cartUtils.getQuantity(req.user.CartVaccine, req.user.CartPackage);
        res.status(200).send({total, quantity});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};