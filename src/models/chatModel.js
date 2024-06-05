

const Mongoose  = require("mongoose");

const Chat = new Mongoose.Schema({
    sender_id:{
        type : Mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    receiver_id:{
        type : Mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    message : {
        type : String,
        require : true
    }
},
{
    timestamps : true
  }
)

exports.Chat = Mongoose.model('Chat' , Chat)