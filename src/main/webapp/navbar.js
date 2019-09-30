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

//设置导航ul.language_list鼠标触发事件
var languageList=document.querySelectorAll("ul.language_list li a");
for (var i=0;i<languageList.length;i++){
	//alert(languageList[i].innerHTML);
	languageList[i].onmouseover=function(){
		this.style.backgroundColor="#f4f4f4";	
		this.style.borderLeftColor="#f4f4f4";	
	};
	languageList[i].onmouseout=function(){
		this.style.backgroundColor="white";	
		this.style.borderLeftColor="white";	
	};
}

//设置导航栏元素li#nav-bar-set-reg，唯一子元素a.person-text nav-per，innerHTML="免费注册"。鼠标触发事件如下：
var navBarSetReg=document.querySelector("li#nav-bar-set-reg a");
navBarSetReg.onmousemove=function(){
		this.style.color="#0066cc";
};
navBarSetReg.onmouseout=function(){
		this.style.color="#333";
};

//设置导航栏元素a.infor-num >span，即消息。如果消息数量为0就不显示。
var eInforNum=document.querySelector("a.infor-num span"); //获取消息数量元素
eInforNum.style.color=green;
var num=parseInt(eInforNum.innerHTML);
if (num==0){
	eInforNum.innerHTML="";
} else{
	eInforNum.style.color=green;
}

















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

//alert(languageList[i].innerHTML);    //setTimeout(alert(languageList[i].innerHTML),1000);