const userModel = require('../user/userModel.js');

module.exports.getCart = async (userId) => {
    try{
        return userModel.findById(userId);
    }catch(err){
        throw err;
    }
};

module.exports.delete = async(userId, type, vaccineID) => {
    try{
        console.log(userId, type, vaccineID);
        await userModel.findByIdAndUpdate(userId, {$pull: {[type]: {_id: vaccineID}}});
    }catch(err){
        throw err;
    }
};