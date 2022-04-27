const cartService = require('./cartService');

exports.renderRegister = async (req, res) => {
    try{
        const cart = await cartService.getCart(req.user._id);
        res.render("cart/views/register",  {CartVaccine: cart.CartVaccine, CartPackage: cart.CartPackage});
    }catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.renderBuy = async (req, res) => {
    try{
        const cart = await cartService.getCart(req.user._id);
        res.render("cart/views/buy", {CartVaccine: cart.CartVaccine, CartPackage: cart.CartPackage});
    }catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.delete = async (req, res) => {
    try{
        await cartService.delete(req.user._id, req.query.type, req.query.id);
        const cart = await cartService.getCart(req.user._id);
        res.render("cart/views/buy", {CartVaccine: cart.CartVaccine, CartPackage: cart.CartPackage});
    }catch (err) {
        res.status(500).send({message: err.message});
    }
};