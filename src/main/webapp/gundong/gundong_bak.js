/*========================================gundong.html页面js脚本========================================================*/
window.onload = function(){
  var oDiv = document.getElementById('div1');
  var oUl = document.getElementById('ul1');
  var speed =-168//初始化速度

  oUl.innerHTML += oUl.innerHTML;//图片内容*2-----参考图（2）
  var oLi= document.getElementsByTagName('li');
  oUl.style.width = oLi.length*1680+'px';//设置ul的宽度使图片可以放下

  var oBtn1 = document.getElementById('btn1');
  var oBtn2 = document.getElementById('btn2');
  var num=0;
  var status=0;
  
  //定时执行move=====================================================
  var timer = setInterval(move,50);//全局变量 ，保存返回的定时器

  async function move(){
		if(oUl.offsetLeft<-(oUl.offsetWidth)){//向左滚动，当靠左的图4移出边框时
		  oUl.style.left = 0;
		}
		if(oUl.offsetLeft > 0){//向右滚动，当靠右的图1移出边框时
		  oUl.style.left = -(oUl.offsetWidth)+'px';
		}
		if(num==1680){
			clearInterval(timer);
			await sleep4(2000);
			console.log("sleep后"+oUl.offsetLeft);
			num=0;
			timer = setInterval(move,50);
			console.log("清除timer后"+oUl.offsetLeft);
		}		
		oUl.style.left = oUl.offsetLeft + speed + 'px';
		num=num+168;
  }
  
 oBtn1.addEventListener('click',async function(){
	  if(status==0){
		  clearInterval(timer);
		  status=1;
	  }else if(status==1){
		  timer = setInterval(move,50);
		  status=0;
	  }
},false);
  
  
}
  function suspend(){
	  var vUl=document.getElementById('ul1');
	  vUl.style.left ="-1680px";
  }

  function sleep(sleepTime){
    var start=new Date().getTime();
    while(true){
        if(new Date().getTime()-start>sleepTime){
            break;    
        }
    }
}



	  
/* oBtn2.addEventListener('click',function(){
		speed = 168;
	  },false); */
		


/* oDiv.addEventListener('mouseout', function () {     
		timer = setInterval(move,50);
	  },false);
	  oDiv.addEventListener('mousemove', function () {
		clearInterval(timer);//鼠标移入清除定时器
		num=0;
	  },false);
} */




