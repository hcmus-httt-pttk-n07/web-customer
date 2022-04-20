const vaccineService = require('../vaccine/vaccineService');

exports.renderStore = async (req, res) => {
    try {
        res.render("store/views/store");
    } catch (e) {
        res.status(500).send({message: e.message});
    }
};

exports.renderDetail = async (req, res) => {
    try {
        const vaccine = await vaccineService.getVaccineById(req.params.id);
        res.render("store/views/store-detail",{vaccine});
    } catch (e) {
        res.status(500).send({message: e.message});
    }
};

exports.renderPackageDetail = async (req, res) => {
    try {
        const packages = await vaccineService.getPackageById(req.params.id);
        res.render("store/views/store-package-detail",{packages});
    } catch (e) {
        res.status(500).send({message: e.message});
    }
};