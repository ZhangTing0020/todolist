const express = require('express');
let jwt = require('jsonwebtoken');

const router = express.Router();
let db = require("../db.js");
const utility = require('utility');


//  1./todo/list     GET   无参数
router.get("/list", function(req, res) {
  // console.log('todo/list');
    //登录上来以后,从token中解密得到userId
    db("select * from todo where author_id = ?", req.user.userId, function(err, arr) {
      if (err != null) {
        res.send({
          status: 1,
          message: "展示个人待办项失败",
        });
      } else {
        // console.log(arr);
        res.send({
          status: 0,
          message: "展示个人待办项成功！",
          data: arr
        });
      }
    });
  });

  // 2./todo/add   POST  参数名：content内容     isdone完成状态
  router.post("/add", function(req,res) {

    
    req.body.author_id = req.user.userId;
    console.log(req.body);
    db("insert into todo set ?", req.body, function(err, arr) {
        console.log(err);
        if (err != null) {
            res.send({
              status: 1,
              message: "插入待办项失败",
            });
          } else {
            res.send({
              status: 0,
              message: "插入待办项成功！",
            //   data: arr
            });
          }
    });

  });
  // 3.  /todo/edit      POST  参数名：id  content    isdone
  router.post("/edit", function(req, res) {
      console.log(req.body);
      // console.log(req.body.id);
      // console.log(req.user.userId);
    db('update todo set ? where id = ? and author_id = ?',[req.body,req.body.id,req.user.userId],function(err,arr) {
        if (err != null) {
          console.log(err);
            res.send({
              status: 1,
              message: "编辑更新待办项失败",
            });
          } else {
            res.send({
              status: 0,
              message: "编辑更新待办项成功！",
            //   data: arr
            });
          }
    }) 
  });
  // 4./todo/del/:id  GET  :id 为要删除的动态id
  router.get("/del/:id", function(req, res) {
    console.log('1111111111111111');
    // 1.获取id
    let Id = req.params.id;
    console.log(Id);
    db("delete from todo where id=? and author_id = ?", [Id,req.user.userId], function(err, obj) {
     console.log(err);
        if (err != null) {
        res.send({
          status: 1,
          message: "删除待办项失败！",
        });
      } else {
        res.send({
          status: 0,
          message: "删除待办项成功！"
        });
      }
    });
  });



  module.exports = router;