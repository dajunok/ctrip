/**
 * 
 
 var html_width=document.documentElement.clientWidth;         //��ȡ��������ڿ�ȣ�1640
var iframe_ele=document.querySelector("iframe");
iframe_ele.style.width=html_width+"px";


 
 */



/*========================================gundong.htmlҳ��js�ű�========================================================*/
window.onload = function(){
  var oDiv = document.getElementById('div1');
  var oUl = document.getElementById('ul1');
  var speed = 2;//��ʼ���ٶ�

  oUl.innerHTML += oUl.innerHTML;//ͼƬ����*2-----�ο�ͼ��2��
  var oLi= document.getElementsByTagName('li');
  oUl.style.width = oLi.length*1680+'px';//����ul�Ŀ��ʹͼƬ���Է���

  var oBtn1 = document.getElementById('btn1');
  var oBtn2 = document.getElementById('btn2');


  function move(){
	if(oUl.offsetLeft<-(oUl.offsetWidth)){//����������������ͼ4�Ƴ��߿�ʱ
	  oUl.style.left = 0;
	}

	if(oUl.offsetLeft > 0){//���ҹ����������ҵ�ͼ1�Ƴ��߿�ʱ
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

  var timer = setInterval(move,30);//ȫ�ֱ��� �����淵�صĶ�ʱ��

  oDiv.addEventListener('mouseout', function () {
	timer = setInterval(move,30);
  },false);
  oDiv.addEventListener('mousemove', function () {
	clearInterval(timer);//������������ʱ��
  },false);
}