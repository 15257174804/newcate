const express=require('express');
const pool=require('../pool.js')    
var router=express.Router();
router.get('/',(req,res)=>{
	res.send('ffkkkkkk');
})
router.post('/login',(req,res)=>{
	var obj=req.body;
	var $uname=obj.uname;
	var $upwd=obj.upwd;
	if(!$uname){
		res.send("用户名不存在");
		return;
	}
	if(!$upwd){
		res.send("密码不存在");
		return;
	}
	pool.query('select * from cate_user where uname=? and upwd=?',[$uname,$upwd],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
router.post("/register",(req,res)=>{
	var obj=req.body;
	console.log(obj);
	var $uname=obj.uname;
	console.log($uname);
	if(!$uname){
		res.send('用户名称不存在');
		return;
	}
	var $upwd=obj.upwd;
	if(!$upwd){
		res.send('用户密码不存在');
		return;
	}
	var $email=obj.email;
	if(!$email){
		res.send('用户邮箱不存在');
		return;
	}
	var $phone=obj.phone;
	if(!$phone){
		res.send('联系方式不存在');
		return;
	}
	var $gender=obj.gender;
	if(!$gender){
		res.send('用户性别不存在');
		return;
	}
	var sql="insert into cate_user values(null,?,?,?,?,?)";
	pool.query(sql,[$uname,$upwd,$email,$phone,$gender],(err,result)=>{
		if(err) throw err;
		console.log(result.affectedRows);
		if(result.affectedRows>0){
			res.send("1");
		}else{
			res.send("0");
		}
	})
})
router.get("/checkUname",(req,res)=>{
	var $uname=req.query.uname;
	if(!$uname){
		res.send("用户名不存在");
		return;
	}
	var sql="select*from cate_user where uname=?"
	pool.query(sql,[$uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('1')
		}else{
			res.send("0")
		}
	})
})
router.get("/checkEmail",(req,res)=>{
	var $email=req.query.email;
	if(!$email){
		res.send("邮箱不存在");
		return;
	}
	var sql="select*from cate_user where email=?"
	pool.query(sql,[$email],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('1')
		}else{
			res.send("0")
		}
	})
})
module.exports=router;
