/*
|--------------------------------------------------------------------------
| 建立模型
|--------------------------------------------------------------------------
|
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const CategorySchema = new Schema({
    name:{
        type:String,
        default:''
    },
    path:{
        type:String,
        default:''
    },
    template:{
        type:String,
        default:''
    },
    sort:{
        type:Number,
        default:0
    },
    is_sys:{
        type:Number,
        default:0
    },
    is_nav:{
        type:Number,
        default:0
    },
    create_at:{
        type:Date,
        default:Date.now()
    },
    update_at:{
        type:Date,
        default:Date.now()
    },
    delete_at:{
        type:Date,
        default:null
    }
});

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;