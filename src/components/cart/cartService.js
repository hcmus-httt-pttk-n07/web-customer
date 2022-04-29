const userModel = require('../user/userModel.js');

module.exports.getCart = async (userId) => {
    try {
        return userModel.findById(userId);
    } catch (err) {
        throw err;
    }
};

module.exports.delete = async (userId, type, vaccineID) => {
    try {
        await userModel.findByIdAndUpdate(userId, {$pull: {[type]: {_id: vaccineID}}});
    } catch (err) {
        throw err;
    }
};

module.exports.changeQuantityVaccine = async (user, vaccineId, quantity) => {
    try {
        console.log(user.CartVaccine);
        await user.CartVaccine.forEach(vaccine => {
            if (vaccine._id === vaccineId) {
                vaccine.SoLuong = quantity;
                vaccine.TongTien =  Math.round( vaccine.SoLuong * vaccine.Gia * 100) / 100;
            }
        });
        console.log(user.CartVaccine);
        await userModel.findByIdAndUpdate(user._id, {$set: {CartVaccine: user.CartVaccine}});
    } catch (err) {
        throw err;
    }
};

module.exports.changeQuantityPackage = async (user, vaccineId, quantity) => {
    try {
        await user.CartPackage.forEach(vaccine => {
            if (vaccine._id === vaccineId) {
                vaccine.SoLuong = quantity;
                vaccine.TongTien =  Math.round( vaccine.SoLuong * vaccine.Gia * 100) / 100;
            }
        });
        await userModel.findByIdAndUpdate(user._id, {$set: {CartPackage: user.CartPackage}});
    } catch (err) {
        throw err;
    }
};