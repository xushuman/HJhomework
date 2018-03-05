const express = require('express');
const router = express.Router();
const article = require("../controllers/article");
const upload = require("../library/upload");
const auth = require("../middleware/auth");

//获取文章
router.get('/', article.index);

//添加文章页面
router.get('/add', auth, article.add);

//添加文章
router.post('/add', auth, upload.single('img'), article.save);

//更新文章
router.post('/update/:id', article.update);

//删除文章
router.get('/delete/:id', article.del);

module.exports = router;
