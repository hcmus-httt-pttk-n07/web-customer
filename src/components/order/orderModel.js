const {default: mongoose} = require("mongoose");

const Schema = mongoose.Schema;

const HoaDon = new Schema({
    QuocGia:String,
    HoTen:String,
    DiaChi:String,
    SDT:String,
    Email:String,
    DiaChiPhu:String,
    GhiChu:String,
    TinhTrang:String,
    TrungTam: Array,
    NgayDat:String,
    TongTien: Number,
    LoaiHDon: String,
    HinhThucTT: String,
    XacNhanTT: Boolean,
    PhuongThucTT: String,
    MaKH: String,
    MaPDHang: String,
    Vaccine:[{
        _id: String,
        TenVaccine: String,
        SoLuong: Number,
        Gia: Number,
        TongTien: Number,
        HinhAnh: String,
        MoTa: String,
        NgayTiem: String,
    }],
    Package:[{
        _id: String,
        TenGoi: String,
        SoLuong: Number,
        Gia: Number,
        TongTien: Number,
        HinhAnh: String,
        MoTa: String,
        NgayTiem: String,
    }]
}, {
    versionKey: false
});

module.exports = mongoose.model('HoaDon', HoaDon, 'HoaDon');