var body=document.body;
var canvas=document.createElement("canvas");
var nav_width=window.innerWidth;
var x=window.screenX;
var y=window.screenY;
var father=document.body;;  //获取body第一个div子节点
var first=father.childNodes[1];

canvas.setAttribute("id","nav-canvas");
canvas.setAttribute("width",nav_width);
canvas.setAttribute("height",37);
//canvas.setAttribute("style","position:absolute;left:0px;top:0px;");
//canvas.setAttribute("style","position:absolute;left:0px;top:0px;");
//second.setAttribute("style","backgroundColor:red");
//插入新节点

father.insertBefore(canvas,first);
first=father.childNodes[1];
//body.appendChild(canvas);

//绘制导航背景矩形
var c=canvas;
var ctx=c.getContext("2d");
ctx.fillStyle="#F4F4F4";   //"#F4F4F4"
ctx.fillRect(0,0,nav_width,37);


//alert(first.nodeName);

