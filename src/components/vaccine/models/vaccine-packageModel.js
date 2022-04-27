const {default: mongoose} = require("mongoose");

const Schema = mongoose.Schema;

const GoiVaccine = new Schema({
    TenGoi: String,
    MoTa: String,
    Gia: Number,
    HinhAnh: String,
    Vaccine:[{
        _id: String,
        TenVcine: String,
        MoTa: String,
        NgayDemNguoc: Number
    }]
}, {
    versionKey: false
});

module.exports = mongoose.model('GoiVaccine', GoiVaccine, 'GoiVaccine');