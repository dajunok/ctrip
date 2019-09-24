var nav_width=window.innerWidth;  							//获取浏览器窗口宽度：1640
var nav_height=window.innerHeight;							//获取浏览器窗口高度：912
var html_width=document.documentElement.clientWidth;        //HTML所在窗口宽度：1440 *  0.08`
var html_height=document.documentElement.clientHeight;    	//HTML所在窗口高度：802
var div=document.getElementsByClassName("nav-bar-cont")[0];	
div.setAttribute("style","width:"+nav_width+"px;");  		//设置导航栏背景宽度为浏览器窗口宽度
var h=div.offsetHeight;                                     //获取导航栏的高度
var a=document.getElementsByClassName("selected")[0];
a.setAttribute("style","line-height:"+h+"px;");             //设置a.selected元素的行高
var slogan=document.getElementsByClassName("selected")[0];



 




//alert("html_w："+html_width+"；html_h："+html_height);  //1280 610
/* alert(div.className);  alert("w："+nav_width+"；h："+nav_height);
alert("html_w："+html_width+"；html_h："+html_height); */

