const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const KhachHang = new Schema({
    HoTen: String,
    NgaySinh: Date,
    GioiTinh: String,
    DiaChi: String,
    SDT: String,
    Username: String,
    Password: String,
}, {
    versionKey: false
});

module.exports = mongoose.model('KhachHang', KhachHang, 'KhachHang');