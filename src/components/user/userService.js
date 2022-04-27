const userModel = require('./userModel');
const cloudinary = require('../../config/cloudinary.config');

module.exports.login = async (username, password) => {
    try {
        const user = await userModel.findOne({Username: username});
        if (!user) {
            return null;
        }
        if (user.Password !== password) {
            return null;
        }
        return user;
    } catch (error) {
        throw error;
    }
}

module.exports.register = async (body) => {
    try {
        const user = await userModel.findOne({Username: body.Username});
        if (user) {
            return null;
        }

        body.NgaySinh = '';
        body.GioiTinh = '';
        body.DiaChi = '';
        body.SDT = '';
        body.Email = '';
        body.GioiThieu = '';
        body.Paypal = '';
        body.QuocGia = '';
        body.STK = '';
        const newUser = new userModel(body);
        await newUser.save();
        return newUser;
    } catch (error) {
        throw error;
    }
}

module.exports.changeAvatar = async (id, file) => {
    try {
        if (!file) return;
        const url = await cloudinary.upload(file.path, 'user_avatar');
        await userModel.findByIdAndUpdate(id, { Avatar: url });
        return url;
    } catch (err) {
        throw err;
    }
};

module.exports.addVaccineToCart = async (id, body) => {
    try {
        body.NgayTiem = Date.now();
        await userModel.findOneAndUpdate({_id: id}, {$push: {'CartVaccine': body}});
    } catch (error) {
        throw error;
    }
}

module.exports.addPackageToCart = async (id, body) => {
    try {
        body.NgayTiem = Date.now();
        await userModel.findOneAndUpdate({_id: id}, {$push: {'CartPackage': body}});
    } catch (error) {
        throw error;
    }
}