const mysql=require('mysql');
var pool=mysql.createPool({
	host:'127.0.0.1',
	post:'3000',
	user:'root',
	password:'',
	database:'cate',
	connectionLimit:20
});
module.exports=pool;