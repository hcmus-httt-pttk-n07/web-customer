const cartService = require('./cartService');
const cartUtils = require('./cartUtils');

exports.renderRegister = async (req, res) => {
    try {
        const cart = await cartService.getCart(req.user._id);
        const total = cartUtils.getTotal(cart.CartVaccine, cart.CartPackage);
        const quantity = cartUtils.getQuantity(cart.CartVaccine, cart.CartPackage);
        res.render("cart/views/register", {
            CartVaccine: cart.CartVaccine,
            CartPackage: cart.CartPackage,
            total,
            quantity
        });
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.renderBuy = async (req, res) => {
    try {
        const cart = await cartService.getCart(req.user._id);
        const total = cartUtils.getTotal(cart.CartVaccine, cart.CartPackage);
        const quantity = cartUtils.getQuantity(cart.CartVaccine, cart.CartPackage);
        res.render("cart/views/buy", {
            CartVaccine: cart.CartVaccine,
            CartPackage: cart.CartPackage,
            total,
            quantity});
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.delete = async (req, res) => {
    try {
        await cartService.delete(req.user._id, req.query.type, req.query.id);
        res.redirect("/cart/buy");
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};