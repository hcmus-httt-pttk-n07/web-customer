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

exports.renderRegisterOrder = (req, res) => {
    try {
        const total = orderUtils.getTotal2(req.user.CartVaccine, req.user.CartPackage);
        const quantity = orderUtils.getQuantity2(req.user.CartVaccine, req.user.CartPackage);
        res.render("order/views/order-register", {user: req.user, total, quantity});
    } catch (e) {
        res.status(500).send({message: e.message});
    }
};

exports.orderForBuy = async (req, res) => {
    try {
        await orderService.orderForBuy(req.user, req.body);
        res.redirect('/order/buy/success');
    } catch (e) {
        res.status(500).send({message: e.message});
    }
};

exports.orderForRegister = async (req, res) => {
    try {
        await orderService.orderForRegister(req.user, req.body);
        res.redirect('/order/register/success');
    } catch (e) {
        res.status(500).send({message: e.message});
    }
};

exports.renderBuySuccess = (req, res) => {
    res.render("order/views/buy-success");
};

exports.renderRegisterSuccess = (req, res) => {
    res.render("order/views/register-success");
};