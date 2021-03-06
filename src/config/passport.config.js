const passport = require('passport');
const LocalStrategy = require('passport-local');
const userService = require('../components/user/userService');

passport.use(new LocalStrategy(
    async (username, password, cb) => {
        const user = await userService.login(username, password);
        if (user) return cb(null, user);
        return cb(null, false);
    }));

passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, {
            _id: user._id,
            HoTen: user.HoTen,
            NgaySinh: user.NgaySinh,
            GioiTinh: user.GioiTinh,
            DiaChi: user.DiaChi,
            SDT: user.SDT,
            Username: user.Username,
            Avatar:  user.Avatar,
            Email: user.Email,
            GioiThieu: user.GioiThieu,
            Paypal: user.Paypal,
            QuocGia: user.QuocGia,
            STK: user.STK,
            CartVaccine: user.CartVaccine,
            CartPackage: user.CartPackage
        });
    });
});

passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, user);
    });
});

module.exports = passport;