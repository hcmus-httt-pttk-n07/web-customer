const vaccineService = require('../../components/vaccine/vaccineService');
const pagination = require('../../public/js/pagination');

module.exports.getVaccine = async (req, res) => {
    try {
        const page = parseInt( req.query.page) || 1;
        const vaccine = await (vaccineService.getAllVaccine());
        const result = pagination.paging(vaccine, page, 3);
        res.send({result});
    } catch (e) {
        res.status(500).send({message: e.message});
    }
};

module.exports.getVaccinePackage = async (req, res) => {
    try {
        const page = parseInt( req.query.page) || 1;
        const vaccinePackage = await vaccineService.getAllPackage();
        const result = pagination.paging(vaccinePackage, page, 3);
        res.send({result});
    } catch (e) {
        res.status(500).send({message: e.message});
    }
};