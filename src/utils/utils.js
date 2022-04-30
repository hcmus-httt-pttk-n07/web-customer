module.exports.getTotal = (CartVaccine, CartPackage) => {
    try {
        let total = 0;
        if (CartVaccine.length > 0) {
            CartVaccine.forEach(vaccine => {
                total += vaccine.TongTien;
            });
        }
        if (CartPackage.length > 0) {
            CartPackage.forEach(vaccine => {
                total += vaccine.TongTien;
            });
        }
        return Math.round(total * 100) / 100;
    } catch (error) {
        throw error;
    }
};

module.exports.getQuantity = (CartVaccine, CartPackage) => {
    try {
        let quantity = 0;
        if (CartVaccine.length > 0) {
            CartVaccine.forEach(vaccine => {
                quantity += vaccine.SoLuong;
            });
        }
        if (CartPackage.length > 0) {
            CartPackage.forEach(vaccine => {
                quantity += vaccine.SoLuong;
            });
        }
        return quantity;
    } catch (error) {
        throw error;
    }
};

module.exports.getTotal2 = (CartVaccine, CartPackage) => {
    try {
        let total = 0;
        if (CartVaccine.length > 0) {
            CartVaccine.forEach(vaccine => {
                total += vaccine.Gia;
            });
        }
        if (CartPackage.length > 0) {
            CartPackage.forEach(vaccine => {
                total += vaccine.Gia;
            });
        }
        return Math.round(total * 100) / 100;
    } catch (error) {
        throw error;
    }
};

module.exports.getQuantity2 = (CartVaccine, CartPackage) => {
    try {
        let quantity = 0;
        if (CartVaccine.length > 0) {
            CartVaccine.forEach(vaccine => {
                quantity += 1;
            });
        }
        if (CartPackage.length > 0) {
            CartPackage.forEach(vaccine => {
                quantity += 1;
            });
        }
        return quantity;
    } catch (error) {
        throw error;
    }
};

module.exports.getDate = function () {
    try {
        const d = new Date();
        const month = d.getMonth() + 1;
        const day = d.getDate();
        const year = d.getFullYear();
        if (month < 10) {
            return `${year}-0${month}-${day}`;
        }
        return `${year}-${month}-${day}`;
    } catch (error) {
        throw error;
    }
}