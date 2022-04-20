const vaccineModel = require('./models/vaccineModel');
const vaccinePackageModel = require('./models/vaccine-packageModel');

exports.getAllVaccine = async () => {
    try {
        return await vaccineModel.find().lean();
    } catch (err) {
        throw err;
    }
};

exports.getAllPackage = async () => {
    try {
        return await vaccinePackageModel.find().lean();
    } catch (err) {
        throw err;
    }
};

exports.getVaccineById = async (id) => {
    try {
        return await vaccineModel.findById(id).lean();
    } catch (err) {
        throw err;
    }
};

exports.getPackageById = async (id) => {
    try {
        return await vaccinePackageModel.findById(id).lean();
    } catch (err) {
        throw err;
    }
};