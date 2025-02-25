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
    var Total_record = await user.countDocuments();
    var page_no = req.query.page_no || 1;

    if (page_no == undefined)
    {
        page_no = 1;
    }
    var limit = 1;
    var t_page = Math.ceil(Total_record / limit);
    var start = (page_no - 1) * limit;

    var data = await user.find().skip(start).limit(limit);


    res.status(200).json({
        status: "Success Get id  dd",
        data,
    })
}
