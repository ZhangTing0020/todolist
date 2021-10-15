layui.use(['layer', "form"], function() {
  let layer = layui.layer;
  let form = layui.form;


  // *******************************************************模块切换
  $("#goto-register").click(function() {
    $("#register").show();
    $("#login").hide();
  });

  $("#goto-login").click(function() {
    $("#register").hide();
    $("#login").show();
  });


  // -----------------------------------------------注册
  // 验证：
  //    1. 必填项；
  //    2. 密码、重复密码   长度 6~12 位，且不能出现空格：非空格类字符；  \S
  //    3. 密码 和 重复密码 必须一致


  form.verify({
    length: function(value, item) { // value：表单的值、item：表单的DOM对象
      // 1.正则
      let reg = /^\S{3,12}$/;

      // 2.判断不满足，要return 文字
      if (reg.test(value) == false) {
        return "需要6~12非空字符串"
      }
    },
    same: function(value) {
      // value: 再次输入的密码
      // 密码的值如何获取？$("#")
      if (value != $("#password").val()) {
        return "两次密码输入不一致";
      }
    },
  });


  $("#register form").on("submit", function(e) {
    e.preventDefault();


    // 1.收集数据
    let data = $(this).serialize(); // 表单元素的name属性值和接口文档的参数名一致

    // 2.提交数据
    $.ajax({
      type: "POST",
      url: "/user/reg",
      data: data,
      success: function(res) {
        layer.msg(res.message);

        if (res.status == 0) {
          // 清空 注册form表单
          $("#register form")[0].reset();

          // 去登录模块显示出来
          $("#register").hide();
          $("#login").show();
        }

      }
    });



  });



  // ************************************************登录,
  //登录上去之后,要调用user/list接口,直接全部展示待办项
  $("#login form").on("submit", function(e) {
    e.preventDefault();
    
    // 1.收集数据
     let data = $(this).serialize();

    // 2.提交数据
    $.ajax({
      type: "POST",
      url: "/user/login",
      data: data,
      success: function(res) {
        layer.msg(res.message);
        console.log(res);
        // res内部：token值 后续页面中 需要用到token;
        if (res.status == 0) {
          // ./ ../   /直接找根路径上index.html
          console.log('11111');
          location.href = "/index.html";
          // 传入本地：
          localStorage.setItem("token", res.token);
          console.log(localStorage.token);
          console.log(res.token);
       
        }
      }
    });

  

  });
});