			var isRegister=false;
			var isUpwd=false;
	//提交注册信息
			function register(){
				console.log(isRegister);//true
				if(isRegister==false ||isUpwd==false){
					return alert('注册失败');
				}
				var xhr=new XMLHttpRequest();
				console.log(xhr);
				xhr.onreadystatechange=function(){
					console.log(xhr.readyState);//true
					if(xhr.readyState==4 && xhr.status==200){
						var result=xhr.responseText;
						console.log(result);
					//	console.log("11111111111111111111111111111111111111111111");
						if(result=="1"){

							alert("注册成功");
						}else{
							alert("注册失败");
						}
					}
				}
				xhr.open("post","/user/register",true);
				var formdata="uname="+uname_r.value+"&upwd="+upwd1.value+"&email="+email.value+"&phone="+phone.value+"&gender="+gender.value;
				//console.log(formdata);
				xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
				xhr.send(formdata);
    }
	//检测用户名
	function checkUname(){
				var xhr=new XMLHttpRequest();
				xhr.onreadystatechange=function(){
					if(xhr.readyState==4&&xhr.status==200){
						var result=xhr.responseText;
						if(result=="0"&&uname_r.value.length>=6){
							unameMsg.innerHTML="可以注册";
							isRegister=true;
						}else if(result=="1"){
							unameMsg.innerHTML="已被注册";
						}else{
							unameMsg.innerHTML="用户名过短，请重输";
						}
					}
				}
				xhr.open("get","/user/checkUname?uname="+uname_r.value,true);
				xhr.send(null);
			}
	//检测密码
			function checkUpwd(){
				if(upwd1.value==upwd2.value)isUpwd=true;
				if(upwd1.value==upwd2.value&&upwd1.value.length>=6&&upwd2.value.length>=6&&isUpwd==true){
					upwdMsg.innerHTML="密码可用";
					isUpwd=true;
				}else if(upwd1.value!==upwd2.value){
					upwdMsg.innerHTML="密码不一致";
				}else{
					upwdMsg.innerHTML="密码过短，请重输";
				}
			}
	//检测邮箱
			function checkEmail(){
				var xhr=new XMLHttpRequest();
				xhr.onreadystatechange=function(){
					if(xhr.readyState==4&&xhr.status==200){
						var result=xhr.responseText;
						if(result=="0"&&email.value.indexOf("@")>0&&email.value.indexOf(".")>0){
							emailMsg.innerHTML="可以注册";
							isRegister=true;
						}else if(result=="1"){
							emailMsg.innerHTML="已被注册";
							isRegister=false;
						}else{
							emailMsg.innerHTML="输入不正确，请重输";
							isRegister=false;
						}
					}
				}
				xhr.open("get","/user/checkEmail?email="+email.value,true);
				xhr.send(null);
			}
	//检测手机号
			function checkPhone(){
				var num=Number(phone.value)
				if(phone.value.slice(0,1)==1&&phone.value.length==11&&!isNaN(num)){
					phoneMsg.innerHTML="输入正确";
					isRegister=true;
				}else{
					phoneMsg.innerHTML="输入不正确";
					isRegister=false;
				}
			}