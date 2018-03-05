const express = require('express');
const router = express.Router();
const home = require('../controllers/home');
const upload = require("../library/upload");


//首页
router.get('/', home.index);

//上传图片
router.post('/upload', upload.single('img'), (req, res, next)=>{
    res.json({
        errno:0,
        data:[
            '/uploads/'+req.file.filename
        ]
    });
});

//分类页
router.get('/:category', home.category);

module.exports = router;
