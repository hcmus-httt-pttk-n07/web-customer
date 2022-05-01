const userService = require('../user/userService');

exports.renderLogin = (req, res) => {
    try {
        req.query.state = req.query.state === 'true';
        res.render("auth/views/login", {message: req.query.message, state: req.query.state});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
};

exports.renderRegister = (req, res) => {
    try {
        req.query.state = req.query.state === 'true';
        res.render("auth/views/register", {message: req.query.message, state: req.query.state});
    } catch (e) {
        res.status(500).json({message: e.message});
    }

};

exports.register = async (req, res) => {
    try {
        const user = await userService.register(req.body);
        if(user!==null){
            res.redirect('/auth/login?message=Tao tai khoan thanh cong!&state=true');
        }
    } catch (e) {
        res.status(500).json({message: e.message});
    }
};

exports.logout = async (req, res) => {
    try {
        req.session.user = null;
        await req.logout();
        res.redirect("/");
    } catch (e) {
        res.status(500).json({message: e.message});
    }
};
