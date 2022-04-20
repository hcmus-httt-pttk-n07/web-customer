const {default: mongoose} = require("mongoose");

const Schema = mongoose.Schema;

const Vaccine = new Schema({
    TenVCine: String,
    MoTa: String,
    Gia: Number,
    HinhAnh: String,
    ThongTin: [{
            VatChat: String,
            MoTa: String,
            BaoBi: String
        }],
    ThongSo: [{
            TenThongSo: String,
            GiaTri: String
        }],
}, {
    versionKey: false
});

module.exports = mongoose.model('Vaccine', Vaccine, 'Vaccine');