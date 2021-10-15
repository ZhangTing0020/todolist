// *****************************************如何实现提前处理？
// 蚕食：函数
//       函数内部需要形参
$.ajaxPrefilter(function(obj) {
  // obj：即将进入$.ajax(obj就是这个地方的对象)

  // 1.使用公共根路径  解决！
  obj.url = "http://127.0.0.1:8080" + obj.url;



  // 2. /my开头路径，专门加两个键值对！
  if (obj.url.indexOf("/todo") != -1) {

    obj.headers = {
      Authorization: localStorage.getItem("token")
    };
    // complete完成回调函数：无论成功与否都会执行！为什么？公共配置留下伏笔！
    obj.complete = function(res) {
      if (res.responseJSON.status == 1 && res.responseJSON.message == "身份认证失败！") {
        localStorage.removeItem("token");
        location.href = "/login.html"
      }
    };
  }

});