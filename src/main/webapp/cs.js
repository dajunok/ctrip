/**
 * 
 
 var html_width=document.documentElement.clientWidth;         //获取浏览器窗口宽度：1640
var iframe_ele=document.querySelector("iframe");
iframe_ele.style.width=html_width+"px";


 
 */



/*========================================gundong.html页面js脚本========================================================*/
window.onload = function(){
  var oDiv = document.getElementById('div1');
  var oUl = document.getElementById('ul1');
  var speed = 2;//初始化速度

  oUl.innerHTML += oUl.innerHTML;//图片内容*2-----参考图（2）
  var oLi= document.getElementsByTagName('li');
  oUl.style.width = oLi.length*1680+'px';//设置ul的宽度使图片可以放下

  var oBtn1 = document.getElementById('btn1');
  var oBtn2 = document.getElementById('btn2');


  function move(){
	if(oUl.offsetLeft<-(oUl.offsetWidth)){//向左滚动，当靠左的图4移出边框时
	  oUl.style.left = 0;
	}

	if(oUl.offsetLeft > 0){//向右滚动，当靠右的图1移出边框时
	  oUl.style.left = -(oUl.offsetWidth)+'px';
	}

	oUl.style.left = oUl.offsetLeft + speed + 'px';
  }

  oBtn1.addEventListener('click',function(){
	speed = -2;
  },false);
  oBtn2.addEventListener('click',function(){
	speed = 2;
  },false);

  var timer = setInterval(move,30);//全局变量 ，保存返回的定时器

  oDiv.addEventListener('mouseout', function () {
	timer = setInterval(move,30);
  },false);
  oDiv.addEventListener('mousemove', function () {
	clearInterval(timer);//鼠标移入清除定时器
  },false);
}