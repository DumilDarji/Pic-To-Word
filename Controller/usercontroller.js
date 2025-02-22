var user = require("../Model/userModel");

exports.index = async (req, res) => {
    var data = await user.find();
    res.status(200).json({
        status: "Success",
        data
    })
}
exports.Add = async (req, res) => {
    await user.create(req.body);
    res.status(200).json({
        status: "Success created ",
        
    })
}