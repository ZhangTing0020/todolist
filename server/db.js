// 封装：不同的地方形成参数
function db(sqlStr, data, callback) {
    let mysql = require("mysql");
    const conn = mysql.createConnection({
      host: 'localhost',
      port: 3306, // 端口
      user: 'root', // 用户名
      password: 'root', // 密码
      database: '00-todoList' // 连接哪个数据库
    });
    conn.connect();
    conn.query(sqlStr, data, callback);
    conn.end();
  }
  
  // 导出  module.exports 后面 函数 或 对象
  module.exports = db;