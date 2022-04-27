const userService = require('./userService');

module.exports.getInfo = (req, res) => {
    try {
        if (req.user) {
            res.render('user/views/profile', {
                user: req.user
            });
        }
    } catch (e) {
        res.status(500).send({message: e.message});
    }
};

module.exports.changeAvatar = async (req, res) => {
    try {
        req.user.Avatar = await userService.changeAvatar(req.user._id, req.file);
        res.redirect('back');
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}