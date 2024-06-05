

const Mongoose  = require("mongoose");

const User = new Mongoose.Schema({
    name:{
        type : String,
        required:true
    },
    image : {
        type : String,
        required:true
    },
    password : {
        type : String,
        required : true
    },

    is_online : {
        type : Boolean,
        default: 0
    }
},
{
    timestamps : true
  }
)

exports.User = Mongoose.model('User' , User)