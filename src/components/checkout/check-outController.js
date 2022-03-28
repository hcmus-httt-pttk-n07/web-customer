/*************************** GET methods ***************************/
// Render check out page
exports.render = (req, res) => {
    res.render("checkout/views/checkout");
};

// Render success page
exports.renderSuccess = (req, res) => {
    res.render("checkout/views/order-success");
};