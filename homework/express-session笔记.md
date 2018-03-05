express-session 使用

    安装：npm install express-session --save
    
    引入：const session = require('express-session')
    
    使用：app.use(session({
            secret: 'keyboard cat', //一个String类型的字符串，作为服务器端生成session的签名
            resave: true, //(是否允许)当客户端并行发送多个请求时，其中一个请求在另一个请求结束时对session进行修改覆盖并保存。
            saveUninitialized: true //初始化session时是否保存到存储
        }))
        
    设置session：
        req.session.name = name
    获取session：
        let name = req.session.name
    删除session
        req.session.destroy()
