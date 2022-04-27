const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const KhachHang = new Schema({
    HoTen: String,
    NgaySinh: String,
    GioiTinh: String,
    DiaChi: String,
    SDT: String,
    Username: String,
    Password: String,
    Avatar: String,
    Email: String,
    GioiThieu: String,
    Paypal: String,
    QuocGia: String,
    STK: String,
    CartVaccine: [
        {
            _id: String,
            TenVcine: String,
            MoTa: String,
            Gia: Number,
            HinhAnh: String,
            SoLuong: Number,
            NgayTiem: Date,
            TongTien: Number
        }
    ],
    CartPackage: [
        {
            _id: String,
            TenGoi: String,
            MoTa: String,
            Gia: Number,
            HinhAnh: String,
            SoLuong: Number,
            NgayTiem: Date,
            TongTien: Number
        }
    ]
}, {
    versionKey: false
});

module.exports = mongoose.model('KhachHang', KhachHang, 'KhachHang');