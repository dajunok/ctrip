var html_width=document.documentElement.clientWidth;         //获取浏览器窗口宽度：1640
var nav=document.getElementsByClassName("nav-bar-cont")[0];  
var nav_width=nav.offsetWidth;

//设置导航栏的边框
nav.style.borderLeftStyle="solid";
nav.style.borderLeftColor="#f4f4f4";
nav.style.borderLeftWidth=(html_width-nav_width)/2+"px"; 
nav.style.borderRightStyle="solid";
nav.style.borderRightColor="#f4f4f4";
nav.style.borderRightWidth=(html_width-nav_width)/2+"px";  























/* var nav_width=window.innerWidth;  							//获取浏览器窗口宽度：1640
var nav_height=window.innerHeight;							//获取浏览器窗口高度：912
var html_width=document.documentElement.clientWidth;        //HTML所在窗口宽度：1440 *  0.08`
var html_height=document.documentElement.clientHeight;    	//HTML所在窗口高度：802
var div=document.getElementsByClassName("nav-bar-cont")[0];	
div.setAttribute("style","width:"+nav_width+"px;");  		//设置导航栏背景宽度为浏览器窗口宽度
var h=div.offsetHeight;                                     //获取导航栏的高度
var a=document.getElementsByClassName("selected")[0];
a.setAttribute("style","line-height:"+h+"px;");             //设置a.selected元素的行高
var slogan=document.getElementsByClassName("selected")[0];
 */

/*设置导航栏div.nav-bar-cont元素的边框宽度*/
// div.position="absolute";
// div.style.borderLeftStyle="solid";
// div.style.borderLeftColor="#f4f4f4";
// div.style.with="1196px"; 
// div.style.borderLeftWidth=(nav_width-1196)/2+"px";    	/*1196是div.nav-bar-cont元素的width内容宽度*/
// div.style.borderRightWidth=(nav_width-1196)/2+"px";		/*1196是div.nav-bar-cont元素的width内容宽度*/
// div.style.height="38px";
// div.style.backgroundColor="#f4f4f4"; 
/* border-left-style:solid;
border-left-width:100px;
border-left-color:#f4f4f4; */
//alert("html_w："+html_width+"；html_h："+html_height);  //1280 610
/* alert(div.className);  alert("w："+nav_width+"；h："+nav_height);
alert("html_w："+html_width+"；html_h："+html_height); */

//document.location.reload();//刷新当前页面  