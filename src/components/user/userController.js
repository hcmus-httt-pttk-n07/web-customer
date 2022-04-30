const userService = require('./userService');
const orderService = require('../order/orderService');

module.exports.getInfo = (req, res) => {
    try {
        if (req.user) {
            res.render('user/views/profile', {
                user: req.user
            });
        }
    } catch (e) {
        res.status(500).send({message: e.message});
    }
};

module.exports.changeAvatar = async (req, res) => {
    try {
        req.user.Avatar = await userService.changeAvatar(req.user._id, req.file);
        res.redirect('back');
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports.renderBill = async (req, res) => {
    try {
        console.log(req.user._id);
        const order = await orderService.getOrderByMaKH(req.user._id);
        console.log(order);
        res.render("user/views/order",{order});
    } catch (e) {
        res.status(500).send({message: e.message});
    }
};