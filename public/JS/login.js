function user_login(){
    //1.获取xhr
    var xhr=new XMLHttpRequest();
    //2.绑定监听
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            var result=xhr.responseText;
            if(result=="1"){
                alert("登录成功");
            }else{
                alert("登录失败");
                console.log("失败")
            }
        }
    }
    //3.打开链接，创建请求
    xhr.open("post","/user/login",true);
    var formdata="uname="+uname_l.value+"&upwd="+upwd.value;
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    //4.发送请求
    xhr.send(formdata)
}