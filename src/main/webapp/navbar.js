/*引入外部其他js脚本*/
var script = document.createElement("script");
script.language = "javascript";
script.src = "function.js";
document.getElementsByTagName("body")[0].appendChild(script); //将jq的js文件引入到head中
//---------------------------------------------------------------------------------------------





var html_width=document.documentElement.clientWidth;         //获取浏览器窗口宽度：1640
var nav=document.getElementsByClassName("nav-bar-cont")[0];  
var nav_width=nav.offsetWidth;



//设置导航栏的边框及内容居中宽度
var Diff_value=html_width-nav_width;
var nav_setLeft=document.querySelector("ul.nav-bar-set"); //或取“你好，请登录”元素。
if(html_width>nav_width){
	nav.style.marginLeft=(html_width-nav_width)/2+"px"; 
	nav.style.marginRight=(html_width-nav_width)/2+"px"; 
}else if(html_width<=1200){
	nav.style.marginLeft=15+"px";
	nav_setLeft.style.left=380+"px";  //设置“你好，请登录”元素margin-left值。	
}



//当浏览器窗口改变时刷新
window.onresize = function(){ location.reload();}


//设置导航ul.language_list鼠标触发事件
var languageList=document.querySelectorAll("ul.language_list li a");
for (var i=0;i<languageList.length;i++){
	//alert(languageList[i].innerHTML);
	languageList[i].onmouseover=function(){     //鼠标移入时
		this.style.backgroundColor="#f4f4f4";	
		this.style.borderLeftColor="#f4f4f4";	
	};
	languageList[i].onmouseout=function(){     //鼠标移出时
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
var num=parseInt(eInforNum.innerHTML);
if (num==0){
	eInforNum.innerHTML="";
} else{
	eInforNum.style.color="red"  ;
}


//设置导航栏元素li.set-list.set--list a.person-text.nav-myctrip，innerHTML="我的携程"。鼠标触发事件如下：
var navMyctrip=document.querySelector("li.set-list.set-myctrip-list");
navMyctrip.onmousemove=function(){   //鼠标移入时
	this.className="set-list set-myctrip-list current";	
	this.lastElementChild.style.display="block";
};
navMyctrip.onmouseout=function(){	//鼠标移出时
	this.className="set-list set-myctrip-list";	
	this.lastElementChild.style.display="none";
};


//设置导航栏元素li.set-list.set-myorder-list a.person-text.nav-myctrip，innerHTML="我的订单"。鼠标触发事件如下：
var navMyorder=document.querySelector("li.set-list.set-myorder-list");
navMyorder.onmousemove=function(){   //鼠标移入时
	this.className="set-list set-myorder-list current";	
	this.lastElementChild.style.display="block";
};
navMyorder.onmouseout=function(){	//鼠标移出时
	this.className="set-list set-myorder-list";	
	this.lastElementChild.style.display="none";
};

//"我的携程"与"我的订单"下拉框子项鼠标触发事件如下：
var myCtripList=document.querySelectorAll("ul.nav-drowndrop li a");
for (var i=0;i<myCtripList.length;i++){
	myCtripList[i].onmouseover=function(){     //鼠标移入时
		this.style.backgroundColor="#f4f4f4";	
	};
	myCtripList[i].onmouseout=function(){     //鼠标移出时
		this.style.backgroundColor="white";	
	};
}

//设置导航栏元素ul.nav-bar-set > li:nth-of-type(6) a，唯一子元素a，innerHTML="客服中心"。鼠标触发事件如下：
var navBarPerson=document.querySelector("ul.nav-bar-set > li:nth-of-type(6) a");
navBarPerson.onmousemove=function(){
		this.style.color="#0066cc";
};
navBarPerson.onmouseout=function(){
		this.style.color="#333";
};

//设置导航栏【手机App扫描下载】元素li.set-list.set-phone。鼠标触发事件如下：
var navMyMobilDown=document.querySelector("li.set-list.set-phone");
navMyMobilDown.onmousemove=function(){   //鼠标移入时
	this.className="set-list set-phone current";	
	this.lastElementChild.style.display="block";
};
navMyMobilDown.onmouseout=function(){	//鼠标移出时
	this.className="set-list set-phone";	
	this.lastElementChild.style.display="none";
};

//设置导航栏【微信二维码扫描图标】元素li.set-list.set-wechat。鼠标触发事件如下：
var navWechat=document.querySelector("li.set-list.set-wechat");
navWechat.onmousemove=function(){   //鼠标移入时
	this.className="set-list set-wechat current";	
	this.lastElementChild.style.display="block";
};
navWechat.onmouseout=function(){	//鼠标移出时
	this.className="set-list set-wechat";	
	this.lastElementChild.style.display="none";
};

//==================================================第二栏相关脚本================================================
var secCui_hd=document.querySelector("div.cui_hd");
var cui_hd_width=secCui_hd.offsetWidth;
var secNav_tel=document.querySelector("div.nav-tel");
if(html_width>=cui_hd_width){                                  //html_width：浏览器窗口宽度 
	secCui_hd.style.left=(html_width-cui_hd_width)/2+"px";
}else if(html_width<=1200){
	secCui_hd.style.left="0px";
	secNav_tel.style.left="747px";
}


var secSearch=document.getElementsByClassName("cui_search")[0];   //获取搜索框  
var secInput=document.querySelector("#_allSearchKeyword");		  //获取输入框
var secButton=document.querySelector("#search_button_global");    //获取搜索按钮
var status=0;
secInput.setAttribute("placeholder","搜索旅行地/酒店/旅游/景点门票/交通");  //设置搜索框的默认文本。

function _historyResultDiv(){
	secInput.style.boxShadow="0px 1px 1px #2b82f4 inset";
	secSearch.style.background="#2b82f4";
	secButton.style.background="#2b82f4";
	secButton.style.backgroundImage="url('http://localhost:8080/ctrip/image/sprite/platform/un_header_footer20160610.png')";  /*使用sprite雪碧图图标*/
	secButton.style.backgroundPosition="-50px -628px";
	status=1;
}
secInput.onblur=function(){
	secInput.style.boxShadow="none";
	secSearch.style.background="#a4cbff";
	secButton.style.background="#a4cbff";
	secButton.style.backgroundImage="url('http://localhost:8080/ctrip/image/sprite/platform/un_header_footer20160610.png')";  /*使用sprite雪碧图图标*/
	secButton.style.backgroundPosition="-50px -603px";
	status=0;
}
secButton.onmousemove=function(){   //鼠标移入时
	secSearch.style.background="#299cff";
	this.style.background="#299cff";
	this.style.backgroundImage="url('http://localhost:8080/ctrip/image/sprite/platform/un_header_footer20160610.png')";  /*使用sprite雪碧图图标*/
	this.style.backgroundPosition="-50px -653px";
	this.style.cursor="pointer";
};
secButton.onmouseout=function(){	//鼠标移出时
	if (status==0){
		secSearch.style.background="#a4cbff";
		this.style.background="#a4cbff";
		this.style.backgroundImage="url('http://localhost:8080/ctrip/image/sprite/platform/un_header_footer20160610.png')";  /*使用sprite雪碧图图标*/
		this.style.backgroundPosition="-50px -603px";
	}else if(status==1){
		secSearch.style.background="#2b82f4";
		this.style.background="#2b82f4";
		this.style.backgroundImage="url('http://localhost:8080/ctrip/image/sprite/platform/un_header_footer20160610.png')";  /*使用sprite雪碧图图标*/
		this.style.backgroundPosition="-50px -628px";
	}
	
};
//------------------------携程客服热线栏（右侧）
var triLi=document.createElement("li");   //创建元素li，用作携程热线右侧的三角形占位。
var secLi_tel=document.querySelector("#cui-nav-tel-list li:last-of-type");
//alert(secLi_tel.innerHTML);
var parenN=secLi_tel.parentNode;   //获取父节点ul
parenN.appendChild(triLi);         //将新创建的元素li添加到携程热线列表ul#cui-nav-tel-list
triLi.style.position="absolute";
triLi.style.top="25px";
triLi.style.left="195px";
triLi.style.width="15px";
triLi.style.height="15px";
triLi.style.background="white";
triLi.style.backgroundImage="url('http://localhost:8080/ctrip/image/sprite/platform/sprite2019527.png')"; /*使用sprite雪碧图图标*/
triLi.style.backgroundPosition="-42px -52px";
//鼠标移入移除时隐藏设置
var secUl_tel=document.querySelector("#cui-nav-tel-list");
var secTelList=document.querySelectorAll("li.tel-list-more");
secUl_tel.onmousemove=function(){   //鼠标移入时
	this.style.height="90px";
	this.style.borderColor="#b7b5b5";
	this.style.boxShadow="1px 1px 2px 1px #e8e3e3";
	triLi.style.backgroundImage="url('http://localhost:8080/ctrip/image/sprite/platform/sprite2019527.png')";  /*使用sprite雪碧图图标*/
	triLi.style.backgroundPosition="-42px -70px";
	
	for(var i=0;i<secTelList.length;i++){
		secTelList[i].style.display="block";
	}
};
secUl_tel.onmouseout=function(){	//鼠标移出时
	this.style.height="40px";
	this.style.borderColor="white";
	this.style.boxShadow="1px 1px 2px 1px white";
	triLi.style.backgroundImage="url('http://localhost:8080/ctrip/image/sprite/platform/sprite2019527.png')"; /*使用sprite雪碧图图标*/
	triLi.style.backgroundPosition="-42px -52px";
	for(var i=0;i<secTelList.length;i++){
		secTelList[i].style.display="none";
	}
}
//==================================================第三栏相关脚本================================================
var thdList=document.querySelectorAll("ul#cui_nav_ul >li[id]");   //获取三栏列表项：【首页】、【酒店】、【跟团游】、【自由行】、【机票】、【火车】、【汽车▪船】、【用车】、【门票】、【攻略】、【全球卡】、【礼品卡】、【商旅】、【游轮】、【目的地】、【金融】、【跟多】。
var thdStatus=0;
switch(String(window.location.href)){       //window.location.href用于获取当前页地址
	case "http://localhost:8080/ctrip/navigation_ctrip.html":
		thdList[0].style.backgroundColor="red";   //"#0a56bb"
		thdStatus=0;
		break;
	default:
		break;	
	
	
}
var thdBase_nav=document.querySelector("div.base_nav");
var base_nav_width=thdBase_nav.offsetWidth;
if(html_width>=base_nav_width){                                  //html_width：浏览器窗口宽度 
	thdBase_nav.style.left=(html_width-base_nav_width)/2+"px";
}else {
	thdBase_nav.style.left="0px";
}
//以下是第三栏相关的鼠标事件
var thdLiList=document.querySelectorAll("ul#cui_nav_ul >li.sub");
var thdTriangle=document.createElement("div");  //创建白色三角形占位元素
thdTriangle.style.position="absolute";
thdTriangle.style.display="none";
thdTriangle.style.top="33px";
thdTriangle.style.left="132px";
thdTriangle.style.width="20px";
thdTriangle.style.height="11px";
thdTriangle.style.backgroundImage="url('http://localhost:8080/ctrip/image/whiteTri-up.png')"; 
thdTriangle.style.backgroundSize="25px 22px";
thdTriangle.style.backgroundRepeat="no-repeat";
thdTriangle.style.backgroundPosition="center";
for(var i=0;i<thdLiList.length;i++){
	thdLiList[i].onclick=function(){    //鼠标点击时
		this.classList.add("current");      //增加类名"current"
	}
	thdLiList[i].onmouseover=function(){    //鼠标移入时
		this.classList.add("current");		//增加类名"current"
		this.children[1].style.display="block";  			//显示div.cui_subnav_wrap元素
		switch(this.id){
			case "cui_nav_destination":   //汽车▪船
				this.appendChild(thdTriangle);     //将白色三角形占位元素添加到当前元素下面作为子元素
				thdTriangle.style.display="block";
				thdTriangle.style.zIndex="50";
				thdTriangle.style.left="37px";
				break;
			case "cui_nav_g":        //全球购
				this.appendChild(thdTriangle);   //将白色三角形占位元素添加到当前元素下面作为子元素
				thdTriangle.style.display="block";
				thdTriangle.style.zIndex="50";
				thdTriangle.style.left="30px";	
				break;
			case "cui_nav_lpk":        //礼品卡
				this.appendChild(thdTriangle);   //将白色三角形占位元素添加到当前元素下面作为子元素
				thdTriangle.style.display="block";
				thdTriangle.style.zIndex="50";
				thdTriangle.style.left="30px";	
				break;
			default:
				this.appendChild(thdTriangle);   //将白色三角形占位元素添加到当前元素下面作为子元素
				thdTriangle.style.display="block";
				thdTriangle.style.zIndex="50";
				thdTriangle.style.left="22px";				
				break;
		}
		//实现背景颜色由#0a56bb到#2577e3的过渡变化
		$(this).css("background-color","#0a56bb"); 
		$(this).animate({backgroundColor: '#2577e3'});
	}
	thdLiList[i].onmouseout=function(){     //鼠标移出时
		thdTriangle.style.display="none";
		this.classList.remove("current");
		this.children[1].style.display="none";  			//隐藏div.cui_subnav_wrap元素
	}
}
var thdLi_a_List=document.querySelectorAll("ul#cui_nav_ul >li >a.cui_nav_non");
for(var i=0;i<thdLi_a_List.length;i++){
	thdLi_a_List[i].parentNode.onmouseover=function(){  //鼠标移入时
		this.style.backgroundColor="#0a56bb";		
	};
	thdLi_a_List[i].parentNode.onmouseout=function(){  //鼠标移出时		
			this.style.backgroundColor="#2577e3";				
	};
}





//==================================================第四栏相关脚本================================================
//居中显示
var four_mod=document.querySelector("div.mod.cui_subway_internal");
var four_mod_width=four_mod.offsetWidth;
if(html_width>=four_mod_width){                                  //html_width：浏览器窗口宽度 
	four_mod.style.left=(html_width-four_mod_width)/2+"px";
}else {
	four_mod.style.left="0px";
}

//==================================================第五栏：搜索栏（滚动广告）相关脚本================================================
//添加图片
var five_a_pic=document.querySelector("#allyesId_init_img");
var five_img_add=document.createElement("img");   //创建图片元素1。
five_img_add.setAttribute("src", "//localhost:8080/ctrip/image/dimg04/zg021800000159zf14CFB.jpg");
five_img_add.setAttribute("alt", "img_one");
//five_img_add.style.width=html_width+"px";
five_img_add.style.height=340+"px";
five_img_add.style.display="none";
five_img_add.style.zIndex=9;
five_a_pic.appendChild(five_img_add);
//------------------------------------------------
five_img_add=document.createElement("img");   //创建图片元素2。
five_img_add.setAttribute("src", "//localhost:8080/ctrip/image/dimg04/zg061800000153tqtB182.jpg");
five_img_add.setAttribute("alt", "img_two");
//five_img_add.style.width=html_width+"px";
five_img_add.style.height=340+"px";
five_img_add.style.display="none";
five_img_add.style.zIndex=8;
five_a_pic.appendChild(five_img_add);
//------------------------------------------------
five_img_add=document.createElement("img");   //创建图片元素3。
five_img_add.setAttribute("src", "//localhost:8080/ctrip/image/dimg04/zg07180000014z5e4355F.jpg");
five_img_add.setAttribute("alt", "img_three");
//five_img_add.style.width=html_width+"px";
five_img_add.style.height=340+"px";
five_img_add.style.display="none";
five_img_add.style.zIndex=7;
five_a_pic.appendChild(five_img_add);
//------------------------------------------------
five_img_add=document.createElement("img");   //创建图片元素4。
five_img_add.setAttribute("src", "//localhost:8080/ctrip/image/dimg04/zg081800000152wg552A8.jpg");
five_img_add.setAttribute("alt", "img_four");
//five_img_add.style.width=html_width+"px";
five_img_add.style.height=340+"px";
five_img_add.style.display="none";
five_img_add.style.zIndex=6;
five_a_pic.appendChild(five_img_add);
//------------------------------------------------
five_img_add=document.createElement("img");   //创建图片元素5。
five_img_add.setAttribute("src", "//localhost:8080/ctrip/image/dimg04/zg0e19000001837lm1D87.jpg");
five_img_add.setAttribute("alt", "img_five");
//five_img_add.style.width=html_width+"px";
five_img_add.style.height=340+"px";
five_img_add.style.display="none";
five_img_add.style.zIndex=5;
five_a_pic.appendChild(five_img_add);
//------------------------------------------------
five_img_add=document.createElement("img");   //创建图片元素6。
five_img_add.setAttribute("src", "//localhost:8080/ctrip/image/dimg04/zg0j190000017avfw48B1.jpg");
five_img_add.setAttribute("alt", "img_six");
//five_img_add.style.width=html_width+"px";
five_img_add.style.height=340+"px";
five_img_add.style.display="none";
five_img_add.style.zIndex=4;
five_a_pic.appendChild(five_img_add);
//------------------------------------------------
five_img_add=document.createElement("img");   //创建图片元素7。
five_img_add.setAttribute("src", "//localhost:8080/ctrip/image/dimg04/zg0k1700000130bhaCA00.jpg");
five_img_add.setAttribute("alt", "img_seven");
//five_img_add.style.width=html_width+"px";
five_img_add.style.height=340+"px";
five_img_add.style.display="none";
five_img_add.style.zIndex=3;
five_a_pic.appendChild(five_img_add);
//------------------------------------------------
five_img_add=document.createElement("img");   //创建图片元素8。
five_img_add.setAttribute("src", "//localhost:8080/ctrip/image/dimg04/zg0q180000015149r095F.jpg");
five_img_add.setAttribute("alt", "img_eight");
//five_img_add.style.width=html_width+"px";
five_img_add.style.height=340+"px";
five_img_add.style.display="none";
five_img_add.style.zIndex=2;
five_a_pic.appendChild(five_img_add);
//------------------------------------------------
five_img_add=document.createElement("img");   //创建图片元素9。
five_img_add.setAttribute("src", "//localhost:8080/ctrip/image/dimg04/zg0t1800000152y0m2769.jpg");
five_img_add.setAttribute("alt", "img_nine");
//five_img_add.style.width=html_width+"px";
five_img_add.style.height=340+"px";
five_img_add.style.display="none";
five_img_add.style.zIndex=1;
five_a_pic.appendChild(five_img_add);
//------------------------------------------------
//居中显示
var screen_width=window.screen.width;       //屏幕分辨率的宽度:1680px
var five_imgs=document.querySelectorAll("div.pic_banner a img");
var five_div_pic=document.querySelector("div.pic_banner");
var five_div_pic_width=five_div_pic.offsetWidth;
if(html_width>=five_div_pic_width){                                  //html_width：浏览器窗口宽度 ,图片的最大宽度：1920px
	five_div_pic.style.left=(html_width-five_div_pic_width)/2+"px";
	for(var i=0;i<five_imgs.length;i++){
		five_imgs[i].style.maxWidth=five_div_pic_width+"px";
		five_imgs[i].style.left=0+"px";
	}
}else if(html_width<=1000){
	five_div_pic.style.left=0+"px";
	for(var i=0;i<five_imgs.length;i++){
		five_imgs[i].style.left=-550+"px";
		five_imgs[i].style.width=html_width+"px";	
	}
}else {
	five_div_pic.style.left=0+"px";
	for(var i=0;i<five_imgs.length;i++){
		five_imgs[i].style.width=html_width+"px";	
	}
}


//------------------------------------------------
for (var i=0;i<five_imgs.length;i++){
	console.log("five_imgs["+i+"]："+five_imgs[i].getAttribute("src"),five_imgs[i].getAttribute("alt"));
}
//滚动效果（简单图片切换）
//滚动效果（简单图片切换）
window.onload=function(){
	var picNum=0;
	var timerId=setInterval(leftRoll, 3000);
	function leftRoll(){
		picNum++;
		movePIC();
			
	}
	function movePIC(){
		if(picNum==five_imgs.length){
			picNum=0;
		}
		for(var i=0;i<five_imgs.length;i++){
			if(i==picNum){
				five_imgs[i].style.display="block"
			}else{
				five_imgs[i].style.display="none"
			}
		}
	}	
}











































/* -----------------------------------临时测试后作废内容---------------------------------------------
//jquery data()方法的使用
var dom = document.body;
$.data(dom, 'name', '张三');   //将数据绑定到body元素上
alert($('body').data('name'));

//扩展JQuery函数库
jQuery.extend({
    min: function(a, b) {
        return a < b ? a : b;
    },
    max: function(a, b) {
        return a > b ? a : b;
    }
});
jQuery.min(2, 3); //  2 
jQuery.max(4, 5); //  5
$.min(8,10);
console.log(jQuery.min(2, 3),jQuery.max(4, 5),$.min(8,10));



//广告轮播图片
five_imgs[0]：//localhost:8080/ctrip/image/dimg04/zg021800000159zf14CFB.jpg img_one            【泰国水灯节】
five_imgs[1]：//localhost:8080/ctrip/image/dimg04/zg061800000153tqtB182.jpg img_two				【水底世界】
five_imgs[2]：//localhost:8080/ctrip/image/dimg04/zg07180000014z5e4355F.jpg img_three			【假期已过优哉游世界】
five_imgs[3]：//localhost:8080/ctrip/image/dimg04/zg081800000152wg552A8.jpg img_four			【准备好燃一个冬天】
five_imgs[4]：//localhost:8080/ctrip/image/dimg04/zg0e19000001837lm1D87.jpg img_five			【多伦多】
five_imgs[5]：//localhost:8080/ctrip/image/dimg04/zg0j190000017avfw48B1.jpg img_six				【喜迎进博会】
five_imgs[6]：//localhost:8080/ctrip/image/dimg04/zg0k1700000130bhaCA00.jpg img_seven			【枫玩日本】
five_imgs[7]：//localhost:8080/ctrip/image/dimg04/zg0q180000015149r095F.jpg img_eight			【一起来泡温泉】
five_imgs[8]：//localhost:8080/ctrip/image/dimg04/zg0t1800000152y0m2769.jpg img_nine			【秋风起蟹飘香】
//------------------------------------------------
//滚动效果（简单图片切换）
window.onload=function(){
	var picNum=0;
	var timerId=setInterval(leftRoll, 3000);
	function leftRoll(){
		changePIC();
		picNum++;	
	}
	function changePIC(){
		if(picNum==five_imgs.length){
			picNum=0;
		}
		for(var i=0;i<five_imgs.length;i++){
			if(i==picNum){
				five_imgs[i].style.display="block"
			}else{
				five_imgs[i].style.display="none"
			}
		}
	}	
}














console.log(screen_width,html_width,document.body.scrollWidth);
	for(var i=0;i<five_imgs.length;i++){
		five_imgs[i].style.left=(html_width-1920)/2+"px";
	}



var five_pics=document.querySelectorAll("#allyesId_init_img img");
alert(five_pics.length);

alert(String(window.location.href));
thdLi_a_List[i].parentNode.onmouseout=function(){  //鼠标移出时
		if(String(this.children[0].href)==String(window.location.href)){
			this.style.backgroundColor="#0a56bb";
		}else{
			this.style.backgroundColor="#2577e3";
		};
				
	};


//==================================================第三栏相关脚本================================================
//以下是第三栏相关的鼠标事件
var thdLiList=document.querySelectorAll("ul#cui_nav_ul >li.sub");
var thdTriangle=document.createElement("div");  //创建白色三角形占位元素
thdTriangle.style.position="absolute";
thdTriangle.style.display="none";
thdTriangle.style.top="33px";
thdTriangle.style.left="132px";
thdTriangle.style.width="20px";
thdTriangle.style.height="11px";
thdTriangle.style.backgroundImage="url('http://localhost:8080/ctrip/image/whiteTri-up.png')"; 
thdTriangle.style.backgroundSize="25px 22px";
thdTriangle.style.backgroundRepeat="no-repeat";
thdTriangle.style.backgroundPosition="center";
for(var i=0;i<thdLiList.length;i++){
	thdLiList[i].onclick=function(){    //鼠标点击时
		this.classList.add("current");      //增加类名"current"
	}
	thdLiList[i].onmouseover=function(){    //鼠标移入时
		this.classList.add("current");		//增加类名"current"
		this.children[1].style.display="block";  			//显示div.cui_subnav_wrap元素
		switch(this.id){
			case "cui_nav_destination":   //汽车▪船
				this.appendChild(thdTriangle);     //将白色三角形占位元素添加到当前元素下面作为子元素
				thdTriangle.style.display="block";
				thdTriangle.style.zIndex="50";
				thdTriangle.style.left="37px";
				break;
			case "cui_nav_g":        //全球购
				this.appendChild(thdTriangle);   //将白色三角形占位元素添加到当前元素下面作为子元素
				thdTriangle.style.display="block";
				thdTriangle.style.zIndex="50";
				thdTriangle.style.left="30px";	
				break;
			case "cui_nav_lpk":        //礼品卡
				this.appendChild(thdTriangle);   //将白色三角形占位元素添加到当前元素下面作为子元素
				thdTriangle.style.display="block";
				thdTriangle.style.zIndex="50";
				thdTriangle.style.left="30px";	
				break;
			default:
				this.appendChild(thdTriangle);   //将白色三角形占位元素添加到当前元素下面作为子元素
				thdTriangle.style.display="block";
				thdTriangle.style.zIndex="50";
				thdTriangle.style.left="22px";				
				break;
		}
		//实现背景颜色由#0a56bb到#2577e3的过渡变化
		$(this).css("background-color","#0a56bb"); 
		$(this).animate({backgroundColor: '#2577e3'});
	}
	thdLiList[i].onmouseout=function(){     //鼠标移出时
		this.classList.remove("current");
		this.children[1].style.display="none";  			//隐藏div.cui_subnav_wrap元素
	}
}

//以下是第三栏相关的鼠标事件
//-------------
var thdLiList=document.querySelectorAll("ul#cui_nav_ul >li.sub");
for(var i=0;i<thdLiList.length;i++){
	thdLiList[i].onclick=function(){    //鼠标点击时
		this.classList.remove("sub");
		this.classList.add("clik");
		return false;                   //此处用于终止刷新,避免跳转
	}
	thdLiList[i].onmouseover=function(){    //鼠标移入时
		
	}
	thdLiList[i].onmouseout=function(){     //鼠标移出时
		this.classList.remove("clik");
		this.classList.add("sub");
	}
}
style="display:none"



//$('div#cui_nav').animate({backgroundColor: 'red'});

$(function(){ 
   $("div#cui_nav").css("background-color","yellow"); 
});

//将所有div.cui_subnav_wrap元素移动到ul#cui_nav_ul元素下面作为它的子元素
var script = document.createElement("script");
script.language = "javascript";
script.src="jquery-3.4.1.js";
document.getElementsByTagName("body")[0].appendChild(script); //将jq的js文件引入到head中
//---------------------------------------------------------------------------------------------
script = document.createElement("script");
script.language = "javascript";
script.src="jquery.animate-colors.js";
document.getElementsByTagName("body")[0].appendChild(script); //将jq的js文件引入到head中
//---------------------------------------------------------------------------------------------



//以下是第三栏相关的鼠标事件
var thdStatus=0;
var thdLiList=document.querySelectorAll("ul#cui_nav_ul >li.sub");
for(var i=0;i<thdLiList.length;i++){
	thdLiList[i].onmouseover=function(){     //鼠标移入时
	};
	thdLiList[i].onmouseout=function(){     //鼠标移出时
		
	};	
}

alert(thdSubnavList[1].className);
var thdCui_subnav_wrap=document.querySelector("li#cui_nav_hotel >div.cui_subnav_wrap");
var thdParentNode=thdCui_subnav_wrap.parentNode.parentNode;
thdParentNode.appendChild(thdCui_subnav_wrap); 

alert(thdParentNode.lastElementChild.className);
alert(thdParentNode.lastElementChild.firstElementChild.className);
var csElement=document.querySelector("li.set-list.set-myorder-list a.person-text.nav-myctrip");
alert(csElement.innerHTML);

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