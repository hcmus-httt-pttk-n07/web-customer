const orderModel = require('./models/orderModel');

exports.getOrderByMaKH = async (ma) => {
    try {
        return await orderModel.find().where('MaKHang').equals(ma);
    } catch (err) {
        throw err;
    }
};
