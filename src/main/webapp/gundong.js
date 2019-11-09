/*========================================gundong.html页面js脚本========================================================*/

var html_width=document.documentElement.clientWidth;         //获取浏览器窗口宽度：1640
var num=0;
window.onload = function(){
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
	img_bottom.style.display="none";
/* 	picList[0].style.left =0+"px";
	picList[1].style.left =html_width*2+'px';
	picList[2].style.left =html_width*3+'px'; */
	
	e_div.style.width = html_width+'px';
	
	eUL.style.width = ((picList.length)*html_width)+'px';//设置ul的宽度使图片可以放下
  
	//定时执行move=====================================================
	var timer=setInterval(move, 50);
	
	
	
	
	//移动函数
	async function move(){
		if(Math.abs(eUL.offsetLeft)>=eUL.offsetWidth){		//向左滚动
			eUL.style.left = 0;			
		}
		if(Math.abs(eUL.offsetLeft)%html_width==0){
			//clearInterval(timer);
			await sleep2(2000);
		}
		eUL.style.left = eUL.offsetLeft + speed + 'px';

	}  
	
	var Obj={
		max: function(a,b){
			return a > b ? a : b;
		},
		min: function(a,b){
			return a < b ? a : b;
		}
	}
	
	var objcase=Object.create(Obj);
	alert(objcase.max(10,12));
	
	jQuery.fn.test1= function(){
   this.css("background","#ff0");//这里面的this为jquery对象，而不是dom对象
   return this.each(function(){ //遍历匹配的元素，此处的this表示为jquery对象，而不是dom对象
           
          });
 
};
  
  
}




/*
		num++;
		console.log("eUL-left："+eUL.offsetLeft,"num："+num);
		eUL.style.left = eUL.offsetLeft + speed + 'px';




*/
//var timer = setInterval(move,50);//全局变量 ，保存返回的定时器





