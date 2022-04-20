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
        if (req.body.Password.length < 6) {
            res.redirect("/auth/register?message=Mat khau phai co it nhat 6 ki tu&state=false");
            return;
        } else if (req.body.Username.length < 6) {
            res.redirect("/auth/register?message=Ten dang nhap phai co it nhat 6 ki tu&state=false");
            return;
        }
        else if (req.body.Name.length < 1) {
            res.redirect("/auth/register?message=Ho va ten phai co it nhat 1 ki tu&state=false");
            return;
        }

        await userService.register(req.body)
            .then(user => {
                res.redirect('/auth/login?message=Dang ky thanh cong, ban co the dang nhap&state=true');
            })
            .catch(err => {
                res.redirect('/auth/register?message=Dang ky that bai&state=false');
            });
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
