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
exports.Get_id = async (req, res) => {
    var id = req.params.id;
    var data = await user.find(id,req.body);
    res.status(200).json({
        status: "Success Get id ",
        
    })
}