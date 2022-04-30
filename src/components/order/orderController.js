const orderService = require('./orderService');
const orderUtils = require("../../utils/utils");

exports.renderBuyOrder = (req, res) => {
    try {
        const total = orderUtils.getTotal(req.user.CartVaccine, req.user.CartPackage);
        const quantity = orderUtils.getQuantity(req.user.CartVaccine, req.user.CartPackage);
        res.render("order/views/order-buy", {user: req.user, total, quantity});
    } catch (e) {
        res.status(500).send({message: e.message});
    }
};

exports.orderByBuy = async (req, res) => {
    try {
        await orderService.orderForBuy(req.user, req.body);
        res.redirect('/order/success');
    } catch (e) {
        res.status(500).send({message: e.message});
    }
};

exports.renderSuccess = (req, res) => {
    res.render("order/views/order-success");
};