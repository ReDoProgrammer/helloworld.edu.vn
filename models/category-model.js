const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const categorySchema = new Schema({
    title:{
        type:String,
        required:true
    },
    meta:{
        type:String,
        required:true
    },
    order:{
        type:Number,
        required:true,
        default:1
    },
    is_actived:{
        type:Boolean,
        default:true
    },
    created_at:{
        type:Date,
        default:Date.now
    },
    created_by:{
        type:Schema.Types.ObjectId,
        ref:'user'
    }
});


module.exports = mongoose.model('category',categorySchema);



