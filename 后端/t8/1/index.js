const mysql = require('mysql')

//创建连接
const conn = mysql.createConnection({
  host:'localhost',
  user:'front',
  password:'123456',
  port:'3306',
  database:'front'
})

//建立连接
conn.connect()


let sql = 'select * from user where name = ? and city = ?'

//执行sql语句
conn.query(sql,['大红','上海'],(err,result)=>{
  if(err) throw err
  console.log(result)
})


//关闭连接
conn.end()