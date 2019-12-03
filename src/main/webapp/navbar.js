/*引入外部其他js脚本*/
var script = document.createElement("script");
script.language = "javascript";
script.src = "function.js";
document.getElementsByTagName("body")[0].appendChild(script); //将jq的js文件引入到head中
//---------------------------------------------------------------------------------------------





var html_width=document.documentElement.clientWidth;         //获取浏览器窗口宽度：1640
var screen_width=window.screen.width;       //屏幕分辨率的宽度:1680px
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
window.onresize = function(){ 
		html_w=document.documentElement.clientWidth;         //获取浏览器窗口宽度：1640
		if(html_width != html_w){
			location.reload();
		}	

	
}


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




//==================================================第五栏：【水平滑动轮播广告】相关脚本================================================
//添加滚动图片及底部分页圆圈按钮和圆角活动矩形元素(由于循环滚动需要实际图片比滚动效果多出一张重复图片，即第一张和最后一张相同)
$("div#allyesId").prepend("<a href='#' target=''><img src='//localhost:8080/ctrip/image/dimg04/zg0t1800000152y0m2769.jpg' alt='第9张图'></a>");  	//【秋风起蟹飘香】			对应分页按钮索引：0
$("div#allyesId").prepend("<a href='#' target=''><img src='//localhost:8080/ctrip/image/dimg04/zg021800000159zf14CFB.jpg' alt='第1张图'></a>");		//【泰国水灯节】			对应分页按钮索引：8
$("div#allyesId").prepend("<a href='#' target=''><img src='//localhost:8080/ctrip/image/dimg04/zg061800000153tqtB182.jpg' alt='第2张图'></a>");		//【水底世界】				对应分页按钮索引：7
$("div#allyesId").prepend("<a href='#' target=''><img src='//localhost:8080/ctrip/image/dimg04/zg07180000014z5e4355F.jpg' alt='第3张图'></a>");		//【假期已过优哉游世界】	对应分页按钮索引：6
$("div#allyesId").prepend("<a href='#' target=''><img src='//localhost:8080/ctrip/image/dimg04/zg081800000152wg552A8.jpg' alt='第4张图'></a>");		//【准备好燃一个冬天】		对应分页按钮索引：5
$("div#allyesId").prepend("<a href='#' target=''><img src='//localhost:8080/ctrip/image/dimg04/zg0e19000001837lm1D87.jpg' alt='第5张图'></a>");		//【多伦多】				对应分页按钮索引：4
$("div#allyesId").prepend("<a href='#' target=''><img src='//localhost:8080/ctrip/image/dimg04/zg0j190000017avfw48B1.jpg' alt='第6张图'></a>");		//【喜迎进博会】			对应分页按钮索引：3
$("div#allyesId").prepend("<a href='#' target=''><img src='//localhost:8080/ctrip/image/dimg04/zg0k1700000130bhaCA00.jpg' alt='第7张图'></a>");		//【枫玩日本】				对应分页按钮索引：2
$("div#allyesId").prepend("<a href='#' target=''><img src='//localhost:8080/ctrip/image/dimg04/zg0q180000015149r095F.jpg' alt='第8张图'></a>");		//【一起来泡温泉】			对应分页按钮索引：1
$("div#allyesId").prepend("<a href='#' target=''><img src='//localhost:8080/ctrip/image/dimg04/zg0t1800000152y0m2769.jpg' alt='第9张图'></a>");		//【秋风起蟹飘香】			对应分页按钮索引：0
//底部图片分页切换按钮（一排白色圆圈+活动圆角矩形）相关脚本
$("div.mod-banner").append("<div class='swiper-pagination' style='position:absolute; cursor: pointer;display: inline-block; right: 159px; left: auto; height:22px;line-height:22px;width: 250px;  bottom: 10px;'></div>");
$("div.swiper-pagination").append("<span class='swiper-pagination-bullet' tabindex='0' role='button' aria-label='Go to slide 1'></span>");
$("div.swiper-pagination").append("<span class='swiper-pagination-bullet' tabindex='1' role='button' aria-label='Go to slide 2'></span>");
$("div.swiper-pagination").append("<span class='swiper-pagination-bullet' tabindex='2' role='button' aria-label='Go to slide 3'></span>");
$("div.swiper-pagination").append("<span class='swiper-pagination-bullet' tabindex='3' role='button' aria-label='Go to slide 4'></span>");
$("div.swiper-pagination").append("<span class='swiper-pagination-bullet' tabindex='4' role='button' aria-label='Go to slide 5'></span>");
$("div.swiper-pagination").append("<span class='swiper-pagination-bullet' tabindex='5' role='button' aria-label='Go to slide 6'></span>");
$("div.swiper-pagination").append("<span class='swiper-pagination-bullet' tabindex='6' role='button' aria-label='Go to slide 7'></span>");
$("div.swiper-pagination").append("<span class='swiper-pagination-bullet' tabindex='7' role='button' aria-label='Go to slide 8'></span>");
$("div.swiper-pagination").append("<span class='swiper-pagination-bullet' tabindex='8' role='button' aria-label='Go to slide 9'></span>");
$("div.swiper-pagination").find("span").eq(0).addClass(" swiper-pagination-bullet-active");  //页面加载时，默认改变第一个分页按钮图片（改为圆角矩形），即它对应第一张图片。

//居中显示
var five_div_mod=document.querySelector("div.mod-banner");
five_div_mod.style.width=html_width+'px';
var five_aList=document.querySelectorAll("div.pic_banner a");
var five_imgs=document.querySelectorAll("div.pic_banner a img");
//图片的left值根据浏览器窗口大小变化
if(html_width>=1920){                                  //html_width：浏览器窗口宽度 ,图片的最大宽度：1920px
	five_div_mod.style.width=1920+'px';
	five_div_mod.style.left=(html_width-1920)/2+'px';
	for(var i=0;i<five_imgs.length;i++){
		five_imgs[i].style.left=0+"px";
		five_aList[i].style.width=1920+'px';
	}
}else if(html_width>=1600){
	for(var i=0;i<five_imgs.length;i++){
		five_imgs[i].style.left=-220+"px";
		five_aList[i].style.width=html_width+'px';
	}
	//$("div.swiper-pagination").css("right","559px");  //调整分页圆圈包裹元素div.swiper-pagination的靠右位置
}else if(html_width>=1170){	
	for(var i=0;i<five_imgs.length;i++){
		five_imgs[i].style.left=-320+"px";
		five_aList[i].style.width=html_width+'px';
	}
	$("div.swiper-pagination").css("right","159px");  //调整分页圆圈包裹元素div.swiper-pagination的靠右位置
}else {
	for(var i=0;i<five_imgs.length;i++){
		five_imgs[i].style.left=-750+"px";	
		five_aList[i].style.width=html_width+'px';
	}
	$("div.swiper-pagination").css("right","10px");  //调整分页圆圈包裹元素div.swiper-pagination的靠右位置
}
var five_div_pic=document.querySelector("div.pic_banner");
var five_aWidth=five_aList[0].offsetWidth;
five_div_pic.style.width=(five_aWidth*five_aList.length)+'px';

//当离开页面时，停止图片滚动
var visProp = getHiddenProp();
if (visProp) {
	var evtname = visProp.replace(/[H|h]idden/, '') + 'visibilitychange';
	document.addEventListener(evtname, function () {
		var stat= document[getVisibilityState()];
		//alert(stat);
		if(stat=='hidden'){
			window.clearInterval(timerId);
		}else if(stat=='visible'){
			timerId=setInterval(leftScroll,3000);
		}
	},false);
}
//无限循环滚动(带滑动效果）---完美实现版
var spanLength=$("div.swiper-pagination").find("span").length;   //计算分页按钮个数
for(var i=0;i<spanLength;i++){		//此函数给分页按钮添加属性对应图片相关信息
	$("div.swiper-pagination").find("span").eq(i).attr("picNum",i);  //存储图片的索引
	$("div.swiper-pagination").find("span").eq(i).attr("left",five_aWidth*i);  //存储图片偏移量offsetLeft的绝对值
}
var timerId;
var picNum=0;    //picNum=five_aList.length-1时向右滚动;picNum=0向左滚
five_div_pic.sta=picNum;   //存储滚动栏当前显示图片的索引
if(picNum==0){
	window.clearInterval(timerId);
	timerId=setInterval(leftScroll, 5000);   //向左滚动
}else if(picNum==five_aList.length-1){
	five_div_pic.style.left = -five_aWidth*picNum + "px"
	window.clearInterval(timerId);
	timerId=setInterval(rightScroll, 5000);   //向右滚动
}
function leftScroll(){       //向左循环滚动函数
	if(picNum==five_aList.length-1){
		picNum=0;		
		five_div_pic.style.left = 0 + "px"	
	}
	//console.log("picNum："+picNum+"; ");
	picNum++;	
	//console.log(five_div_pic.sta);
	move(five_div_pic,five_aWidth*picNum); 
	//切换滚动栏底部活动分页按钮图标（即该成圆角矩形）
	if(picNum==five_aList.length-1){   
		$("div.swiper-pagination").find("span").removeClass(" swiper-pagination-bullet-active");
		$("div.swiper-pagination").find("span").eq(0).addClass(" swiper-pagination-bullet-active");
		five_div_pic.sta=0;   //存储滚动栏当前显示图片的索引
		console.log("picNum："+picNum+"; "+"five_div_pic.sta："+five_div_pic.sta+"	Left："+five_div_pic.offsetLeft);
	}else{
		$("div.swiper-pagination").find("span").removeClass(" swiper-pagination-bullet-active");
		$("div.swiper-pagination").find("span").eq(picNum).addClass(" swiper-pagination-bullet-active");
		five_div_pic.sta=picNum;   //存储滚动栏当前显示图片的索引
		//console.log("picNum："+picNum+"; "+"five_div_pic.sta："+five_div_pic.sta+"	Left："+five_div_pic.offsetLeft);
	}
}	
function rightScroll(){       //向右循环滚动函数
	if(picNum==0){
		picNum=9;		
		five_div_pic.style.left = -five_aWidth*(five_aList.length-1) + "px"		
	}
	picNum--;
	move(five_div_pic,five_aWidth*picNum); 
	//切换滚动栏底部活动分页按钮图标（即该成圆角矩形）
	if(picNum==0){   
		$("div.swiper-pagination").find("span").removeClass(" swiper-pagination-bullet-active");
		$("div.swiper-pagination").find("span").eq(0).addClass(" swiper-pagination-bullet-active");
	}else{
		$("div.swiper-pagination").find("span").removeClass(" swiper-pagination-bullet-active");
		$("div.swiper-pagination").find("span").eq(picNum).addClass(" swiper-pagination-bullet-active");	
	}
}
function move(elem,scrollWidth){			//实现图片滑动效果函数（从elem元素当前的偏移量（offsetLeft）滑动到指定偏移量scrollWidth。
	window.clearInterval(elem.timerID);		
	elem.timerID=setInterval(function(){   //定时器的id值存储到elem对象的属性中
		var step=160;   //每次移动的距离
		var current=elem.offsetLeft;
		var target=scrollWidth;
		step=Math.abs(current)>target ? -step : step;
		current-=step;
		if(Math.abs(current+target)>Math.abs(step)){
			elem.style.left = current + "px";
		} else{
			window.clearInterval(elem.timerID);
			elem.style.left = (-target) + "px";
		}
		
	},10);
}
//分页按钮鼠标点击事件（滚动栏底部白色分页圆圈）滑动到指定分页按钮位置。
$("div.swiper-pagination").children().each(function(){
	$(this).click(function(){
		clearInterval(timerId);  //停止循环滚动（防止影响分页按钮滑动）
		setTimeout("timerId=setInterval(leftScroll, 5000)",10);		 //重启循环滚动，它将暂停5010毫秒（不是10毫秒哦！！）
		picNum=$(this).attr("picNum")*1;    //改变图片索引值，以便恢复循环滚动后，接着从当前分页按钮对应图片往后循环滚动。
		move(five_div_pic,$(this).attr("left")*1);  //图片包裹元素five_div_pic滑动到指定偏移量（存储在当前分页按钮属性left中）。
		$("div.swiper-pagination").find("span").removeClass(" swiper-pagination-bullet-active");  
		$("div.swiper-pagination").find("span").eq(picNum).addClass(" swiper-pagination-bullet-active");  //改变点击分页按钮的图标为当前活动按钮图标（半圆角矩形，非活动状态时为白色圆圈）。
	})
});
//----------------------下面是页面是否可见监听事件相关函数
//获取document.hidden属性：
function getHiddenProp(){
	var prefixes = ['webkit','moz','ms','o'];
	
	// if 'hidden' is natively supported just return it
	if ('hidden' in document) return 'hidden';
	
	// otherwise loop over all the known prefixes until we find one
	for (var i = 0; i < prefixes.length; i++){
		if ((prefixes[i] + 'Hidden') in document) 
			return prefixes[i] + 'Hidden';
	}
 
	// otherwise it's not supported
	return null;
}
//获取document.visibilityState属性：
function getVisibilityState() {
	var prefixes = ['webkit', 'moz', 'ms', 'o'];
	if ('visibilityState' in document) return 'visibilityState';
	for (var i = 0; i < prefixes.length; i++) {
		if ((prefixes[i] + 'VisibilityState') in document)
			return prefixes[i] + 'VisibilityState';
	}
	// otherwise it's not supported
	return null;
}
//跨浏览器函数，检查文档是否可见。
function isHidden(){
	var prop = getHiddenProp();
	if (!prop) return false;    
	return document[prop];
}

//==================================================第五栏：【搜索框】相关脚本================================================
//居中显示
var mod_search=document.querySelector("div.mod.mod-search");
var mod_search_width=mod_search.offsetWidth;
if(html_width>=mod_search_width){                                  //html_width：浏览器窗口宽度 
	mod_search.style.left=(html_width-mod_search_width)/2+"px";
}else {
	mod_search.style.left="0px";
}
//---“酒店”相关事件
$('p.s_subtab_a#hotelSwitch').on('click','a',function(){    //酒店标签栏鼠标点击事件
	$('p.s_subtab_a#hotelSwitch').find('a').removeClass('current');
	$('p.s_subtab_a#hotelSwitch').find('a').css('color','#666');
	$(this).addClass('current');
	$(this).css('color','#06c');
});
$('p.s_subtab_a#hotelSwitch').on('mouseover','a',function(){    //酒店标签栏鼠标移入事件
	$(this).css('color','#06c');
});
$('p.s_subtab_a#hotelSwitch').on('mouseout','a',function(){     //酒店标签栏鼠标移出事件 
	if($(this).attr('class')!=='current'){
		$(this).css('color','#666');
	}	
});




























/* -----------------------------------临时测试后作废内容---------------------------------------------
//---“酒店”相关事件
$('p.s_subtab_a#hotelSwitch').find('a').click(function(){    //酒店标签栏鼠标点击事件
	$('p.s_subtab_a#hotelSwitch').find('a').removeClass('current');
	$('p.s_subtab_a#hotelSwitch').find('a').css('color','#666');
	$(this).addClass('current');
	$(this).css('color','#06c');
});
$('p.s_subtab_a#hotelSwitch').find('a').mouseover(function(){    //酒店标签栏鼠标移入事件
	$(this).css('color','#06c');
});
$('p.s_subtab_a#hotelSwitch').find('a').mouseout(function(){     //酒店标签栏鼠标移出事件 
	if($(this).attr('class')!=='current'){
		$(this).css('color','#666');
	}	
});



$("div.swiper-pagination").children().each(function(){console.log($(this).attr("tabindex"))});
$("div.swiper-pagination").find("span").eq(0).attr("tabindex");
var timerId=setInterval(leftScroll, 5000);   //向左滚动
function leftScroll(){       //向左循环滚动函数
	if(picNum==five_aList.length-1){
		picNum=0;		
		five_div_pic.style.left = 0 + "px"		
	}
	picNum++;
	move(five_div_pic,five_aWidth*picNum); 
	//切换滚动栏底部活动分页按钮图标（即该成圆角矩形）
	if(picNum==five_aList.length-1){   
		$("div.swiper-pagination").find("span").removeClass(" swiper-pagination-bullet-active");
		$("div.swiper-pagination").find("span").eq(0).addClass(" swiper-pagination-bullet-active");
	}else{
		$("div.swiper-pagination").find("span").removeClass(" swiper-pagination-bullet-active");
		$("div.swiper-pagination").find("span").eq(picNum).addClass(" swiper-pagination-bullet-active");	
	}
}




//无限循环滚动(带滑动效果,但有点瑕疵）
var picNum=0;
window.clearInterval(timerId);
var timerId=setInterval(leftScroll, 5000);   //向左滚动
function leftScroll(){
	if(picNum==five_aList.length-1){
		picNum=0;		
		clearInterval(timerId);
		setTimeout("timerId=setInterval(leftScroll, 5000)",10); //如果此处不把返回值赋值给timerId，将导致前面语句clearInterval(timerId)在下次循环时无法关闭定时器（timerId是过去的值）
		five_div_pic.style.left = 0 + "px"
		$("div.swiper-pagination").find("span").eq(picNum).addClass(" swiper-pagination-bullet-active");
	}else{
		picNum++;
		console.log(picNum+" "+five_div_pic.style.left);
		move(five_div_pic,five_aWidth*picNum); 
		$("div.swiper-pagination").find("span").removeClass(" swiper-pagination-bullet-active");
		$("div.swiper-pagination").find("span").eq(picNum).addClass(" swiper-pagination-bullet-active");		
	}
}
function move(elem,scrollWidth){			//实现图片滑动效果函数
	window.clearInterval(elem.timerID);		
	elem.timerID=setInterval(function(){   //定时器的id值存储到elem对象的属性中
		var step=160;   //每次移动的距离
		var current=elem.offsetLeft;
		var target=scrollWidth;
		step=Math.abs(current)>target ? -step : step;
		current-=step;
		if(Math.abs(current+target)>Math.abs(step)){
			elem.style.left = current + "px";
		} else{
			window.clearInterval(elem.timerID);
			elem.style.left = (-target) + "px";
		}
		
	},10);
}




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



//document.location.reload();//刷新当前页面  

//alert(languageList[i].innerHTML);    //setTimeout(alert(languageList[i].innerHTML),1000);

*/