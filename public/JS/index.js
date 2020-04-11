/*headerÄÚÂÖ²¥Í¼*/
function show(){
    var div=document.getElementsByClassName("show")[0];
    var li=document.getElementsByClassName("act")[0];
    var bro=div.nextElementSibling;
    var fir=div.parentNode.children[0];
    var bro2=li.nextElementSibling;
    var fir2=li.parentNode.children[0];
    div.className="";
    li.className="";
    if(bro!==null){
        bro.className="show";
        bro2.className="act"
    }
    else{
        fir.className="show";
        fir2.className="act";
    }
}
var next=document.getElementsByClassName("next")[0];
next.onclick=function(){
    var div=document.getElementsByClassName("show")[0];
    var li=document.getElementsByClassName("act")[0];
    var bro=div.nextElementSibling;
    var fir=div.parentNode.children[0];
    var bro2=li.nextElementSibling;
    var fir2=li.parentNode.children[0];
    div.className="";
    li.className="";
    if(bro!==null){
        bro.className="show";
        bro2.className="act"
    }
    else{
        fir.className="show";
        fir2.className="act";
    }
}
var pre=document.getElementsByClassName("pre")[0];
pre.onclick=function(){
    var div=document.getElementsByClassName("show")[0];
    var li=document.getElementsByClassName("act")[0];
    var bro=div.previousElementSibling;
    var fir=div.parentNode.children[2];
    var bro2=li.previousElementSibling;
    var fir2=li.parentNode.children[2];
    div.className="";
    li.className="";
    if(bro!==null){
        bro.className="show";
        bro2.className="act"
    }
    else{
        fir.className="show";
        fir2.className="act";
    }
}
var n=setInterval(show,3000);
var div=document.getElementById("header_bigtext");
div.onmouseover=function(){
    clearInterval(n)
}
div.onmouseout=function(){
    n=setInterval(show,3000);
}
/*ÕÚÕÖ²ã*/
var wraps=document.getElementsByClassName("wrapper");
for(var wrap of wraps){
    var fa=wrap.parentNode;
    fa.onmouseover=function(){
        var img=this.children[0].children[0];
        var wrap=this.children[1];
        img.style.transform="scale(1.1)"
        wrap.style.height="100%";
        wrap. style.opacity="1";
    }
    fa.onmouseout=function(){
        var img=this.children[0].children[0];
        var wrap=this.children[1];
        img.style.transform="scale(1)"
        wrap.style.height="0%";
        wrap. style.opacity="0";
    }
}
var masks=document.getElementsByClassName("mask");
for(var mask of masks){
    mask.onmouseover=function() {
        var view=this.children[1];
        view.style.opacity="1";
        var h5 = this.children[1].children[0];
        var p = this.children[1].children[1];
        h5.style.transform="scale(1)";
        h5.style.opacity="1"
        p.style.transform="scale(1)";
        p.style.opacity="1"
    }
    mask.onmouseout=function(){
        var view=this.children[1];
        view.style.opacity="0";
        var h5=this.children[1].children[0];
        var p=this.children[1].children[1];
        h5.style.transform="scale(10)";
        h5.style.opacity="0";
        p.style.transform="scale(10)";
        p.style.opacity="0"
    }
}
/*µ×²¿¼òµ¥ÂÖ²¥*/
function play(){
    var lb=document.getElementsByClassName("play")[0];
    var br=lb.nextElementSibling;
    var fi=lb.parentNode.children[0];
    lb.className="";
    if(br!==null){
        br.className="play";
    }
    else{
        fi.className="play";
    }
}
var m=setInterval(play,3000);
var lb=document.getElementById("lb");
lb.onmouseover=function(){
    clearInterval(m)
}
lb.onmouseout=function(){
    m=setInterval(play,3000);
}
/*µ×²¿formÖÐlabelÐ§¹û*/
var labels=document.getElementsByTagName("label");
for(var label of labels){
    var input=label.previousElementSibling;
    input.onfocus=function(){
        var input=this;
        var label=input.nextElementSibling;
        label.style.top="-20px";
        label.style.color="#F44336";
        input.style.borderBottom="2px solid #000"
    }
    input.onblur=function(){
        var input=this;
        var label=input.nextElementSibling;
        label.style.top="0";
        label.style.color="#8c8c8c";
        input.style.borderBottom="1px solid #dcdcdc"
    }
}
/*services¸´ÔÓÂÖ²¥*/
function s1(){
    var saws=document.getElementsByClassName("saw");
    var b1=saws[3].nextElementSibling;
    var dws=document.querySelectorAll("[data-toggle=dw]");
    var dwws=document.querySelectorAll("[data-toggle=dww]");
    if(b1!==null){
        saws[0].className="";
        b1.className="saw";
    }
    else{
        for(var i=0;i<4;i++){
            var dww=dwws[i];
            dww.className="";
        }
        for(var dw of dws){
            dw.className="saw";
        }
    }
}
var x=setInterval(s1,3000);
var fzl1=document.querySelector("#fzl>div.row:first-child")
fzl1.onmouseover=function(){
    clearInterval(x);
}
fzl1.onmouseout=function(){
    x=setInterval(s1,3000);
}
function s2(){
    var saw_2s=document.getElementsByClassName("saw_2");
    var b2=saw_2s[1].nextElementSibling;
    var dw_2s=document.querySelectorAll("[data-toggle=dw_2]");
    var dww_2s=document.querySelectorAll("[data-toggle=dww_2]");
    if(b2!==null){
        saw_2s[0].className="";
        b2.className="saw_2";
    }
    else{
        for(var i=0;i<2;i++){
            var dww_2=dww_2s[i];
            dww_2.className="";
        }
        for(var dw_2 of dw_2s){
            dw_2.className="saw_2";
        }
    }
}
var y=setInterval(s2,3000);
var fzl2=document.querySelector("#fzl>div.row:nth-child(2)")
fzl2.onmouseover=function(){
    clearInterval(y);
}
fzl2.onmouseout=function(){
    y=setInterval(s2,3000);
}
function s3(){
    var saw_3=document.getElementsByClassName("saw_3")[0];
    saw_3.className="";
    var b3=saw_3.nextElementSibling;
    var ff=saw_3.parentNode.children[0];
    if(b3!==null) b3.className="saw_3";
    else ff.className="saw_3";
}
var z=setInterval(s3,3000);
var fzl3=document.querySelector("#fzl>div.row:last-child")
fzl3.onmouseover=function(){
    clearInterval(z);
}
fzl3.onmouseout=function(){
    z=setInterval(s3,3000);
}
var grids=document.getElementsByClassName("grid");
for(var grid of grids){
    var pp=grid.parentNode;
    pp.onmouseover=function(){
        var grid=this.children[1];
        grid.style.height="100%";
        grid. style.opacity="1";
        grid.style.top="0"
    }
    pp.onmouseout=function(){
        var grid=this.children[1];
        grid.style.height="0%";
        grid. style.opacity="0";
        grid.style.top="100%"
    }
}
/*·µ»Ø¶¥²¿°´Å¥*/
window.onscroll=function(){
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    if(scrollTop>=100)
        toTop.style.display="block";
    else
        toTop.style.display="none";
}