const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    postData : String,
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user' // isme jo id's hongi vo users se belong krengi
    },
    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('post',postSchema);