const cartService = require('../../components/cart/cartService');
const cartUtils = require('../../utils/utils');
const ls = require("local-storage");

module.exports.changeQuantityVaccine = async (req, res) => {
    try {
        await cartService.changeQuantityVaccine(req.user, req.body.id, parseInt(req.body.quantity));
        const total = await cartUtils.getTotal(req.user.CartVaccine, req.user.CartPackage);
        const quantity = cartUtils.getQuantity(req.user.CartVaccine, req.user.CartPackage);
        res.status(200).send({total, quantity});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports.changeQuantityPackage = async (req, res) => {
    try {
        await cartService.changeQuantityPackage(req.user, req.body.id, parseInt(req.body.quantity));
        const total = await cartUtils.getTotal(req.user.CartVaccine, req.user.CartPackage);
        const quantity = cartUtils.getQuantity(req.user.CartVaccine, req.user.CartPackage);
        res.status(200).send({total, quantity});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports.changeDateVaccine = async (req, res) => {
    try {
        await cartService.changeDateVaccine(req.user, req.body.id, req.body.date);
        res.status(200).send({'message': 'success'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports.changeDatePackage = async (req, res) => {
    try {
        await cartService.changeDatePackage(req.user, req.body.id, req.body.date);
        res.status(200).send({'message': 'success'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.addCenter = async (req, res) => {
    try {
        const center = req.body.center;
        if (!ls.get("centers"))
            ls.set("centers", JSON.stringify([center]));
        else{
            let centers = JSON.parse(ls.get("centers"));
            for(let i = 0; i < centers.length; i++){
                if(centers[i] === center){
                    ls.set("centers", JSON.stringify(centers));
                    res.status(200).json({centers: JSON.parse(ls.get("centers"))});
                    return;
                }
            }
            if(centers.length === 2){
                centers.pop(1);
                centers.push(center);
                ls.set("centers", JSON.stringify(centers));
            }
            else{
                centers.push(center);
                ls.set("centers", JSON.stringify(centers));
            }
        }
        res.status(200).json({centers: JSON.parse(ls.get("centers"))});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.delCenter = async (req, res) => {
    try {
        const center = req.body.center;
        const centers = JSON.parse(ls.get("centers"));
        for (let i = 0; i < centers.length; i++) {
            if (centers[i] === center) {
                centers.pop(i);
                ls.set("centers", JSON.stringify(centers));
            }
        }
        res.status(200).json({centers: JSON.parse(ls.get("centers"))});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}