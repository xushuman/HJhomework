/**
 * 文件上传库
 */
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(file);
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        let fileFormat = (file.originalname).split(".");
        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})

const upload = multer({
    storage: storage
});

module.exports = upload;