connect-flash 使用

    安装：npm install connect-flash --save
    
    引入：const flash = require('connect-flash');
    
    使用：app.use(flash());
    
    设置flash：
        req.flash('info', '这里是消息！')
    获取flash：
        req.flash('info');
    
