/*========================================gundong.html页面js脚本========================================================*/

var html_width=document.documentElement.clientWidth;         //获取浏览器窗口宽度：1640
window.onload = function(){
  var oDiv = document.getElementById('div1');
  var oUl = document.getElementById('ul1');
  //var botPIC=document.querySelector('#bottom');
 // botPIC.style.width=html_width+"px";
  var speed =-(html_width)//初始化速度

  oUl.innerHTML += oUl.innerHTML;//图片内容*2-----参考图（2）
  var oLi= document.getElementsByTagName('li');
  for(var i=0;i<oLi.length;i++){
	  oLi[i].style.width=html_width+"px";
  }
  oUl.style.width = (oLi.length*html_width)+'px';//设置ul的宽度使图片可以放下

  var oBtn1 = document.getElementById('btn1');
  var oBtn2 = document.getElementById('btn2');
  var num=0;
  var status=0;
  
  //定时执行move=====================================================
 mySetInterval(move, 100);
	


/*  oBtn1.addEventListener('click',async function(){
	  if(status==true){
		  status=false;
	  }else if(status==false){
		  status=true;
	  }
},false); */
function mySetInterval(mv,time){
    function inner(){
        mv();
        setTimeout(inner,time);
    }
    inner()
}

function move(){
		status=Math.abs(oUl.offsetLeft);
		if(status>=oUl.offsetWidth){//向左滚动，当靠左的图4移出边框时
		  oUl.style.left = 0;
		}
		oUl.style.left = oUl.offsetLeft + speed + 'px';
  }  
  
  
  
}

//var timer = setInterval(move,50);//全局变量 ，保存返回的定时器





