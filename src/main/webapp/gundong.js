/*========================================gundong.html页面js脚本========================================================*/


var html_width=document.documentElement.clientWidth;         //获取浏览器窗口宽度：1640
var num=0;
var timer;

//当离开页面时，停止图片滚动
var visProp = getHiddenProp();
if (visProp) {
    var evtname = visProp.replace(/[H|h]idden/, '') + 'visibilitychange';
    document.addEventListener(evtname, function () {
        var stat= document[getVisibilityState()];
		//alert(stat);
		if(stat=='hidden'){
			window.clearInterval(timer);
		}else if(stat=='visible'){
			timer=setInterval(move, 5000);
		}
    },false);
}

	(function(){ location.reload();})
	
	var speed =-(html_width/10)//初始化速度
	var eUL=document.querySelector("div#gudong >ul");
	var	e_div= document.querySelector('div#gudong');
	var picList=document.querySelectorAll('div#gudong ul li');
	var imgList=document.querySelectorAll('li > img');
	for(var i=0;i<imgList.length;i++){
		imgList[i].style.width=html_width+"px";
	}

	for(var i=0;i<picList.length;i++){
		picList[i].style.width=html_width+"px";
	}
	
	var div_bottom=document.querySelector("div#bottom");
	var img_bottom=document.querySelector("div#bottom >img");
	div_bottom.style.width=html_width+"px";
	img_bottom.style.width=html_width+"px";
	img_bottom.style.display="block";
	img_bottom.style.zIndex=1;
/* 	picList[0].style.left =0+"px";
	picList[1].style.left =html_width*2+'px';
	picList[2].style.left =html_width*3+'px'; */
	
	e_div.style.width = html_width+'px';
	
	eUL.style.width = ((picList.length)*html_width)+'px';//设置ul的宽度使图片可以放下
	eUL.style.left= 0+'px';
	eUL.style.zIndex=2;
  
	//定时执行move=====================================================
	var pixels=-html_width;
	var gd_css={"-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "transform": "translate3d(" + pixels + "px, 0px,0px)",
				"transition-duration": "100ms"};
	var first_css={"-webkit-transform": "translate3d(" + (-html_width) + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + (-html_width) + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + (-html_width) + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + (-html_width) + "px, 0px, 0px)",
                "transform": "translate3d(" + (-html_width) + "px, 0px,0px)",
				"transition-duration": "500ms"};
	var gd_left=0;
	window.clearInterval(timer);
	timer=setInterval(move, 5000);
	//$(eUL).css(gd_css);	
	
	//移动函数
	function move(){		
		if(Math.abs(gd_left)>=(picList.length-1)*html_width){
			gd_left=html_width;
			$(eUL).hide();
			$(eUL).css('left',gd_left+'px');			
		}else{	
			$(eUL).show();
			$(eUL).css('left',gd_left+'px');
			$(eUL).css(gd_css);			
			gd_left+=pixels;
		}
		
	}
 







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



/*


$(window).bind('beforeunload',function(){
return '您输入的内容尚未保存，确定离开此页面吗？';
});

window.onblur=function(){
	window.clearInterval(timer);
	timer=setInterval(move, 5000);
}

console.log($(eUL).offset());

	//移动函数
	function move(){		
		if(Math.abs(gd_left)>=(picList.length-1)*html_width){
			window.clearInterval(timer);
			gd_left=html_width;
			$(eUL).hide();
			$(eUL).css('left',gd_left+'px');
		}else{	
			$(eUL).show();
			$(eUL).css('left',gd_left+'px');
			$(eUL).css(gd_css);			
			gd_left+=pixels;
		}
		
	}
	
	

	async function move(){
		if(Math.abs(eUL.offsetLeft)>=eUL.offsetWidth){		//向左滚动
			eUL.style.left = 0;			
		}
		if(Math.abs(eUL.offsetLeft)%html_width==0){
			//clearInterval(timer);
			//await sleep2(2000);
		}
		eUL.style.left = eUL.offsetLeft + speed + 'px';

	}



		num++;
		console.log("eUL-left："+eUL.offsetLeft,"num："+num);
		eUL.style.left = eUL.offsetLeft + speed + 'px';




*/
//var timer = setInterval(move,50);//全局变量 ，保存返回的定时器





