/*
|--------------------------------------------------------------------------
| mongodb 数据库链接
|--------------------------------------------------------------------------
|
*/
const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/blog';
const db = mongoose.connect(uri).then(() => {
    console.log('数据库链接成功!')
}).catch(err => {
    console.log('ERROR：数据库链接失败!' + err)
});
module.exports = db;