const vaccineService = require('../../components/vaccine/vaccineService');
const userService = require('../../components/user/userService');

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

module.exports.addVaccineToCart = async (req, res) => {
    try {
        if (!req.user){
            res.send({message: 'You must login to add vaccine to cart'});
            return;
        }
        await userService.addVaccineToCart(req.user._id, req.body);
        res.send({success: 'Add vaccine to cart successfully'});
    } catch (e) {
        res.status(500).send({message: e.message});
    }
};

module.exports.addPackageToCart = async (req, res) => {
    try {
        if (!req.user){
            res.send({message: 'You must login to add package to cart'});
            return;
        }
        await userService.addPackageToCart(req.user._id, req.body);
        res.send({success: 'Add package to cart successfully'});
    } catch (e) {
        res.status(500).send({message: e.message});
    }
};