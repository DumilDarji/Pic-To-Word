var mongoose = require('mongoose');
var userschema = new mongoose.Schema({
    Name:{
        type: String
    },
    Image1:{
        type: String
    },
    Image2:{
        type: String
    },
    Answer:{
        type: String
    },
    MixAnswer: {
        type: String
    }
})
module.exports = mongoose.model("user", userschema);