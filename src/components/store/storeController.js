/*************************** GET methods ***************************/
// Render product page
exports.renderStore = (req, res) => {
    res.render("store/views/store");
};

// Render product-detail page
exports.renderDetail = (req, res) => {
    res.render("store/views/store-detail");
};