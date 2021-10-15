// ************************************************判断本地是否有token
// 没有token的时候
// if (localStorage.getItem("token") == null) {
//   location.href = "/login.html"
// }
//***************list  ******************add by zhangting begin******************************* */
function getList() {
  $.ajax({
    url: "/todo/list",
    // headers: {
    //   Authorization: localStorage.token
    // },
    success: function (res) {
      
      if (res.status == 0) {
        $(".todo-list").html('');
        let str = "";
        res.data.forEach(item => {
          str += `
          <li class=${item.isdone==1?'completed':''}>
          <div class="view">
            <input class="toggle" type="checkbox" ${item.isdone==1?'checked':''}>
            <label>${item.content}</label>
            <button myid='${item.id}' class="destroy" ></button>
          </div>
          <input myid='${item.id}' class="edit" value="Create a TodoMVC template">
        </li>
          `
        });
        $(".todo-list").html(str);
   
         
      }
    }
  });
}
getList();

//***************新增******************add by zhangting end******************************* */

$(".new-todo").on("keydown", function (e) {

  if (e.keyCode == 13) {

    let val = $(".new-todo").val();
    //****************************************add by zhangting begin************************ */

    // 进行token解密： 注意这个包是基于express；

    // app.use(expressJWT({
    //   secret: 'todoList',
    //   algorithms: ['HS256']
    // }).unless({
    //   // 除了登录和注册的接口之外，其他接口都需要认证
    //   path: ['/user/login', '/user/reg']
    // })); 
    // console.log(localStorage.token.userId);
    $.ajax({
      type: 'POST',
      url: "/todo/add",
      data: {
        content: `${val}`,
        isdone: 0
      },
      success: function (res) {
        if (res.status == 0) {
          let li = $(`<li>
          <div class="view">
            <input class='toggle' type="checkbox">
            <label>${val}</label>
            <button  class="destroy"></button>
          </div>
          <input  class="edit" value="Create a TodoMVC template">
        </li>`);
          $("ul").append(li);
        }
      },
    });
    getList();
    //*****************************************add by zhangting end********************** */
    $(".new-todo").val("");
  }
});


// 需求：用户对x 点击chick后，有li消失
// 步骤：
//    1. 给x添加点击：不能直接添加！【事件委托：委托，我不要哨兵，派给父级！事件默认在冒泡阶段执行！】
$("ul").on("click", ".destroy", function () {
  //  2.谁谁谁怎么了？li被删了！
  //     2.1 当前点x 对应 li  

  //***********删除*************************add by zhangting begin**************** */
  let id = $(this).attr("myid");
  console.log(id);
  $.ajax({
    type: 'GET',
    url: "/todo/del/" + id,
    headers: {
      Authorization: localStorage.token
    },
    success: function (res) {
      if (res.status == 0) {
        console.log(res);
      }
    },
  });
  //****************************************add by zhangting end**************** */
  $(this).parents("li").remove();
});

// 需求：用户对 圈 点击click后，样式改变！
$("ul").on("click", ".toggle", function (e) {
  //       【样式操作：样式四个方法】

  $(this).parents("li").toggleClass("completed");
  //**************************add by zhangting begin*******************8 */
  let isdone = 0;
  //有completed类   isdone就是1
  //没有completed类   isdone就是0
  // console.log($(this).parents("li").hasClass('completed'));
  // if ($(this).parents("li").hasClass('completed')) {
  //   isdone = 1;
  // } else {
  //   isdone = 0;
  // }
  $(this).parents("li").hasClass('completed') ? isdone = 1 : isdone = 0;
  let Id = $(this).parents('div').children('button').attr("myid");
  $.ajax({
    type: 'POST',
    url: '/todo/edit',
    data: {
      id: Id,
      isdone: isdone
    },
    success: function (res) {
      console.log(res);
    }
  });
  //*****************************************add by zhangting end********************* */
});

// 需求：用户对 中间文字 双击 ，当前整个li添加一个样式 editng
//                             中间文字----->跑到了新出来input
// 步骤：
//     1.
$("ul").on("dblclick", "label", function () {
  // 1.给父级添加类名
  $(this).parents("li").addClass("editing");


  // 2.中间文字  跑到  了新出来input
  let str = $(this).text(); // 【回扣：记忆不牢,查询筛选】



  // 3.找父级下一个兄弟   
  $(this).parent().next().val(str);

});


// 需求： 用户对谁？发生什么行为？很多谁它怎么了？用户对input，失去焦点行为，li去掉样式
//                                                                         输入框  跑到 文字部分
$("ul").on("blur", ".edit", function () {
  // 1.li去掉样式
  $(this).parent().removeClass("editing");

  // 2. 输入框的值  跑到  文字部分
  let str = $(this).val();
  //*********************************************add by zhangting begin*********** */

  let Id = $(this).attr("myid");
  $.ajax({
    type: 'POST',
    url: '/todo/edit',
    data: {
      id: Id,
      content: str,
    },
    success: function (res) {
      console.log(res);
    }
  })



  //*********************************************add by zhangting end*********** */


})












//    
//