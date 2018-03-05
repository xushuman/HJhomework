/*
|--------------------------------------------------------------------------
| 建立模型
|--------------------------------------------------------------------------
|
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const UserSchema = new Schema({
    username:{
        type:String,
        default:''
    },
    password:{
        type:String,
        default:''
    },
    nickname:{
        type:String,
        default:''
    },
    avatar:{
        type:String,
        default:''
    },
    signature:{
        type:String,
        default:''
    },
    position:{
        type:String,
        default:''
    },
    info:{
        type:String,
        default:''
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

const User = mongoose.model('User', UserSchema);
module.exports = User;