    /**
     *
     * @param id  传入元素的id
     * @returns {HTMLElement | null}  返回标签对象，方便获取元素
     */
	 //当离开页面时，停止图片滚动
	var visProp = getHiddenProp();
	if (visProp) {
		var evtname = visProp.replace(/[H|h]idden/, '') + 'visibilitychange';
		document.addEventListener(evtname, function () {
			var stat= document[getVisibilityState()];
			//alert(stat);
			if(stat=='hidden'){
				window.clearInterval(timeId);
			}else if(stat=='visible'){
				timeId=setInterval(onmouseclickHandle,2000);
			}
		},false);
	}
	
	
	//---------------------------------------主体代码（start）
    function my$(id) {
        return document.getElementById(id);
    }
 
    //获取各元素，方便操作
    var box=my$("box");            	//div#box.box
    var inner=box.children[0];     	//div.inner
    var ulObj=inner.children[0];	//div.inner > ul
    var list=ulObj.children;		//ul > li >a   图片列表
    var olObj=inner.children[1];	//ol.bar 
    var arr=my$("arr");             //div#arr
    var imgWidth=inner.offsetWidth;		//图片宽度
    var right=my$("right");
    var pic=0;
    //根据li个数，创建小按钮
    for(var i=0;i<list.length;i++){
        var liObj=document.createElement("li");
 
        olObj.appendChild(liObj);
        liObj.innerText=(i+1);
        liObj.setAttribute("index",i);
 
        //为按钮注册mouseover事件
        liObj.οnmοuseοver=function () {
            //先清除所有按钮的样式
 
            for (var j=0;j<olObj.children.length;j++){
                olObj.children[j].removeAttribute("class");
            }
            this.className="current";
            pic=this.getAttribute("index");
            animate(ulObj,-pic*imgWidth);
        }
 
    }
 
 
    //设置ol中第一个li有背景颜色
    olObj.children[0].className = "current";
    //克隆一个ul中第一个li,加入到ul中的最后=====克隆
    ulObj.appendChild(ulObj.children[0].cloneNode(true));
 
	
	
	var timeId=setInterval(onmouseclickHandle,2000);	//执行图片滚动效果 
	
	//左右焦点实现点击切换图片功能
    box.οnmοuseοver=function () {     //鼠标移入
        arr.style.display="block";
        clearInterval(timeId);
    };
    box.οnmοuseοut=function () {	//鼠标移出
        arr.style.display="none";
        timeId=setInterval(onmouseclickHandle,2000);
    }; 
    right.οnclick=onmouseclickHandle;
    
	
	function onmouseclickHandle() {       //循环滚动函数
        
        if (pic == list.length - 1) {	//如果pic的值是5,恰巧是ul中li的个数-1的值,此时页面显示第六个图片,而用户会认为这是第一个图,所以,如果用户再次点击按钮,用户应该看到第二个图片
            pic = 0;//先设置pic=0
            ulObj.style.left = 0 + "px";//把ul的位置还原成开始的默认位置
        }
        pic++;//立刻设置pic加1,那么此时用户就会看到第二个图片了						
		animate(ulObj, -pic * imgWidth);//pic从0的值加1之后,pic的值是1,然后ul移动出去一个图片
		if (pic == list.length - 1) {  //如果pic==5说明,此时显示第6个图(内容是第一张图片),第一个小按钮有颜色,
            //第五个按钮颜色干掉
            olObj.children[olObj.children.length - 1].className = "";
            //第一个按钮颜色设置上
            olObj.children[0].className = "current";
        } else {
            //干掉所有的小按钮的背景颜色
            for (var i = 0; i < olObj.children.length; i++) {
                olObj.children[i].removeAttribute("class");
            }
            olObj.children[pic].className = "current";
        }
    }
	function animate(element, target) {   //设置任意的一个元素,移动到指定的目标位置。（实现图片滑动效果）
        clearInterval(element.timeId);
        //定时器的id值存储到对象的一个属性中
        element.timeId = setInterval(function () {
            //获取元素的当前的位置,数字类型
            var current = element.offsetLeft;
            //每次移动的距离
            var step = 10;
            step = current < target ? step : -step;
            //当前移动到位置
            current += step;
            if (Math.abs(current - target) > Math.abs(step)) {
                element.style.left = current + "px";
            } else {
                //清理定时器
                clearInterval(element.timeId);
                //直接到达目标
                element.style.left = target + "px";
            }
        }, 10);
    }
	
	left.οnclick=function () {
        if (pic==0){
            pic=list.length-1;
            ulObj.style.left=-pic*imgWidth+"px";
        }
        pic--;
        animate(ulObj,-pic*imgWidth);
        for (var i = 0; i < olObj.children.length; i++) {
            olObj.children[i].removeAttribute("class");
        }
        olObj.children[pic].className = "current";	//当前的pic索引对应的按钮设置颜色
    };
	//---------------------------------------主体代码（end）
	
	
	
	//------------------------------------------------------------下面是页面是否可见监听事件相关函数
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
	