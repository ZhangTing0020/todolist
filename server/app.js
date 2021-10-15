let express = require('express');
const expressJWT = require('express-jwt');
let jwt = require('jsonwebtoken');
let app = express();
app.listen(8080 ,() => console.log('8080 todoList后台服务启动'))



// ***********************************************************中间件
// 处理post参数
app.use(express.urlencoded({ extended: false }));

//允许跨域
let cors = require("cors");
app.use(cors());


// 进行token解密： 注意这个包是基于express；

app.use(expressJWT({
  secret: 'todoList',
  algorithms: ['HS256']
}).unless({
  // 除了登录和注册的接口之外，其他接口都需要认证
  path: ['/user/login', '/user/reg']
}));


// ************************************************************设计一级路由：
// 登录注册
let userRouter = require("./routers/user.js")
app.use("/user", userRouter);


// index主页
let todoRouter = require("./routers/todo.js")
app.use("/todo", todoRouter);



// ************************************************************处理错误中间件
app.use(function(err, req, res, next) {
    if (err.name == "UnauthorizedError") {
      res.send({ status: 1, message: "身份认证失败！" });
    }
  });













