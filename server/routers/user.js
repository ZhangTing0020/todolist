const express = require('express');
const router = express.Router();
let jwt = require('jsonwebtoken');
let db = require("../db.js");
const utility = require('utility');


//注册
router.post("/reg", function(req, res) {

    req.body.password = utility.md5(req.body.password);
  
    // console.log(req.body);
    db("insert into user set ?", req.body, function(err, arr) {
      // console.log(err);
      if (err != null) {
        res.send({
          status: 1,
          message: "注册失败！"
        });
      } else {
        res.send({
          status: 0,
          message: "注册成功！"
        });
      }
    });
  });


// 登录：
//     前端：用户名 密码 
//     后台：验证！对比数据库！
router.post("/login", function(req, res) {
  // 1.前端的数据已经拿到 加密：数据库存入密码的时候就是加密的！
  req.body.password = utility.md5(req.body.password);


  // 2.查询是否有这个人
  db("select * from user where username=? and password=?", [req.body.username, req.body.password], function(err, arr) {
    if (err != null) {
      res.send({
        status: 1,
        message: "登录失败！",
      });
    } else {
      // 没有人
      if (arr.length == 0) {
        res.send({
          status: 1,
          message: "用户名或密码错误！",
        });
      }
      // 有该用户：
      else {
        // 生成token:  jwt算法：用户id + 私有字符串  id属性名：未来破解的时候，通过该属性名
        let id = arr[0].id;
        let token = "Bearer " + jwt.sign({ userId: id }, 'todoList', { expiresIn: '20h' });

        res.send({
          status: 0,
          message: "登录成功！",
          token: token
        });
      }

    }
  })
}); 

  module.exports = router;