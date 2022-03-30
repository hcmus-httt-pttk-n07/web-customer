/*************************** GET methods ***************************/
// Render login page
exports.renderLogin = (req, res) => {
    res.render("auth/views/login");
};

// Render register page
exports.renderRegister = (req, res) => {
    res.render("auth/views/register");
};