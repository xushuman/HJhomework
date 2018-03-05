const express = require('express');
const router = express.Router();
const user = require("../controllers/user")

//登录页
router.get('/login', user.login);

//提交登录
router.post('/login', user.doLogin);

//登出
router.get('/logout', user.logout);

module.exports = router;
