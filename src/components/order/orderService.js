const orderModel = require('./orderModel.js');
const userModel = require('../user/userModel.js');
const ls = require(('local-storage'));
const utils = require('../../utils/utils.js');

module.exports.orderForBuy = async (user, body) => {
    try {
        if (body.QuocGia === '') {
            body.QuocGia = user.QuocGia;
        }
        if (body.HoTen === '') {
            body.HoTen = user.HoTen;
        }
        if (body.NgaySinh === '') {
            body.NgaySinh = user.NgaySinh;
        }
        if (body.DiaChi === '') {
            body.DiaChi = user.DiaChi;
        }
        if (body.Email === '') {
            body.Email = user.Email;
        }
        if (body.SDT === '') {
            body.SDT = user.SDT;
        }

        body.MaKHang = user._id;
        body.MaPDHang = '';
        body.XacNhanTT = false;
        body.TinhTrang = 'Dang Cho';
        body.LoaiHDon = 'Dat Mua';
        body.NgayDat = utils.getDate();
        body.TongTien = utils.getTotal(user.CartVaccine, user.CartPackage);
        body.TrungTam = JSON.parse(ls.get('centers'));
        body.Vaccine = user.CartVaccine;
        body.Package = user.CartPackage;

        body.Vaccine.forEach(vaccine => {
            delete vaccine.NgayTiem;
        });

        body.Package.forEach(vaccine => {
            delete vaccine.NgayTiem;
        });

        await orderModel.create(body);

        user.CartVaccine = [];
        user.CartPackage = [];
        await userModel.updateOne({ _id: user._id }, user);
    } catch (error) {
        throw error;
    }
}

module.exports.orderForRegister = async (user, body) => {
    try {
        if (body.QuocGia === '') {
            body.QuocGia = user.QuocGia;
        }
        if (body.HoTen === '') {
            body.HoTen = user.HoTen;
        }
        if (body.NgaySinh === '') {
            body.NgaySinh = user.NgaySinh;
        }
        if (body.DiaChi === '') {
            body.DiaChi = user.DiaChi;
        }
        if (body.Email === '') {
            body.Email = user.Email;
        }
        if (body.SDT === '') {
            body.SDT = user.SDT;
        }

        body.MaKHang = user._id;
        body.MaPDHang = '';
        body.XacNhanTT = false;
        body.TinhTrang = 'Dang Cho';
        body.LoaiHDon = 'Tiem Chung';
        body.NgayDat = utils.getDate();
        body.TongTien = utils.getTotal2(user.CartVaccine, user.CartPackage);
        body.TrungTam = JSON.parse(ls.get('centers'));
        body.Vaccine = user.CartVaccine;
        body.Package = user.CartPackage;

        body.Vaccine.forEach(vaccine => {
            delete vaccine.SoLuong;
            delete vaccine.TongTien;
        });

        body.Package.forEach(vaccine => {
            delete vaccine.SoLuong;
            delete vaccine.TongTien;
        });

        await orderModel.create(body);

        user.CartVaccine = [];
        user.CartPackage = [];
        await userModel.updateOne({ _id: user._id }, user);
    } catch (error) {
        throw error;
    }
}

exports.getOrderByMaKH = async (ma) => {
    try {
        return await orderModel.find().where('MaKHang').equals(ma);
    } catch (err) {
        throw err;
    }
};
