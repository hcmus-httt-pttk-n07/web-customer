const {default: mongoose} = require("mongoose");

const Schema = mongoose.Schema;

const HoaDon = new Schema({
    NgayLap: Date,
    TongTien: Number,
    LoaiHDon: String,
    HinhThucTT: String,
    XacNhanTT: Boolean,
    PhuongThucTT: String,
    MaKHang: String,
    MaPDHang: String
}, {
    versionKey: false
});

module.exports = mongoose.model('HoaDon', HoaDon, 'HoaDon');