const vaccineService = require('../vaccine/vaccineService');

module.exports.getHomepage = async (req, res)=>{
  try{
    const vaccine = (await vaccineService.getAllVaccine()).slice(0,6);
    const vaccinePackage = (await vaccineService.getAllPackage()).slice(0,4);
    res.render('homepage/views/homepage',{vaccine, vaccinePackage});
  }catch (error) {
    res.status(500).send(error);
  }
};