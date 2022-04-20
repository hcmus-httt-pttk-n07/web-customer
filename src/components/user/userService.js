const userModel = require('./userModel');

module.exports.login = async (username, password) => {
    try {
        console.log(username, password);
        const user = await userModel.findOne({Username: username});
        console.log(user);
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

        body.NgaySinh = '' ;
        body.GioiTinh = '';
        body.DiaChi = '';
        body.SDT = '';
        const newUser = new userModel(body);
        await newUser.save();
        return newUser;
    } catch (error) {
        throw error;
    }
}