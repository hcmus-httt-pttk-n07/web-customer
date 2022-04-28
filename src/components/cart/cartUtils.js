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