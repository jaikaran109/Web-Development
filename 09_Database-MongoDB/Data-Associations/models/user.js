const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    age : Number,
    posts : [  
        {
            type:mongoose.Schema.Types.ObjectId, // post ek Arrays h jisme id's likhi hogi
            ref : 'post' // ye jo id's aane  wali h vo post model se belong krengi
        }
    ]
});

module.exports = mongoose.model('user',userSchema);