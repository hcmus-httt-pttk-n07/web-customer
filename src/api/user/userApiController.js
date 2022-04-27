const userService = require("../../components/user/userService");

exports.editProfile = async (req, res) => {
    try {
        if (req.user == null) {
            res.status(401).json({"message": "UnAuthorized"})
            return;
        }
        await userService.updateUser(req.user.Username, req.body.field, req.body.new_val)
        switch (req.body.field) {
            case 'HoTen':
                req.user.HoTen = req.body.new_val
                break;
            case 'NgaySinh':
                req.user.NgaySinh = req.body.new_val
                break;
            case 'GioiTinh':
                req.user.GioiTinh = req.body.new_val
                break;
            case 'DiaChi':
                req.user.DiaChi = req.body.new_val
                break;
            case 'SDT':
                req.user.SDT = req.body.new_val
                break;
            case 'Email':
                req.user.Email = req.body.new_val
                break;
            case 'GioiThieu':
                req.user.GioiThieu = req.body.new_val
                break;
            case 'Paypal':
                req.user.Paypal = req.body.new_val
                break;
            case 'QuocGia':
                req.user.QuocGia = req.body.new_val
                break;
            case 'STK':
                req.user.STK = req.body.new_val
                break;
        }
        res.status(200).json({message: "success"})
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}