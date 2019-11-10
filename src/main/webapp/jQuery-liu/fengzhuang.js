/**
 * 测试JS代码封装及如何扩展JQuery
一、功能简介：
		1、jQuery.extend() 	函数用于将一个或多个对象的内容合并到目标对象。
		2、jQuery.data() 	向被选元素附加数据，或者从被选元素获取数据。
		3、Object.create(Obj)  实例化JS类对象。
		
		
*/




//1、------------通过Object.create()实例化JS对象
(function ($, window, document) {
	var myf={
		className:"liulijun",
		max: function(a,b){
			console.log("max："+this.className );
			return a > b ? a : b;
		},
		min: function(a,b){
			console.log("min："+this.className );
			return a < b ? a : b;
		}
	}
	//调用
	var objcase=Object.create(myf);
	console.log("myf："+objcase.max(10,12)+objcase.min(10,12));
}(jQuery, window, document));
//--------------------------------end



//2、------------定义JQuery命名空间fn函数
(function($, window, document) {
	$.fn.max = function (a,b) {
        return a > b ? a : b;
        
    };
	console.log($.fn.max(10,12));

}(jQuery, window, document));

//--------------------------------end


//3、--------------------------------jQuery简单封装案例
(function($, window, document) {
	 var Carousel = {						//创建JS类对象Carousel
        init : function (options, el) {   	//定义方法成员init
            var base = this;

            base.$elem = $(el);
            base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);   //合并数据对象，第一个参数是目标对象{}，是一个没有成员的空对需要，后面参数是合并对象。

            base.userOptions = options;
            base.loadContent();
        }
	 };
	 
	 $.fn.owlCarousel = function (options) {
			return this.each(function () {
				if ($(this).data("owl-init") === true) {
					return false;
				}
				$(this).data("owl-init", true);
				var carousel = Object.create(Carousel); 	//通过Object.create()实例化JS对象（类）
				carousel.init(options, this);    			//调用Carousel类实例对象carousel的成员方法init
				$.data(this, "owlCarousel", carousel);
			});
		};
    
	$.fn.owlCarousel.options = {   //创建纯属性对象options（即不包含方法成员）
        items : 5,
        itemsCustom : false,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        singleItem : false,
        itemsScaleUp : false,
        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000
	}	
	
	
}(jQuery, window, document));	
//-------------------------------------------------------------end	
	

	
	
//3、--------------------------------测试1
(function($, window, document) {
	
	$.fn.owlCarousel.options={   //创建纯属性对象options（即不包含方法成员）
        items : 5,
        itemsCustom : false,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 3],
		jsonPath : false
	}
	var base=$.fn.owlCarousel;
	if(typeof base.options.jsonPath === "string"){
		console.log("是字符串！");
		
	}else{console.log("不是字符串！")}
	var $elem=$('div');
	$elem.data("owlCarousel", "OK");
	var options= $.extend({}, $.fn.owlCarousel.options, $elem.data());
	console.log(options.items,options.owlCarousel);
	
	/*定义一个人类*/  
    function Person(name,age)  
    {  
        this.name=name;  
        this.age=age;  
    }  
    /*定义一个学生类*/  
    function Student(name,age,grade)  
    {  
		if(true){ Person.apply(this,arguments);  }
        this.grade=grade;  
    }  
    //创建一个学生类  
    var student=new Student("zhangsan",21,"一年级");  
    //测试  
    alert("name:"+student.name+"\n"+"age:"+student.age+"\n"+"grade:"+student.grade);  
    //大家可以看到测试结果name:zhangsan age:21  grade:一年级  
    //学生类里面我没有给name和age属性赋值啊,为什么又存在这两个属性的值呢,这个就是apply的神奇之处. 




}(jQuery, window, document));	
//-------------------------------------------------------------end	
		
//4、--------------------------------测试2
(function($, window, document) {
	
	
	


}(jQuery, window, document));	
//-------------------------------------------------------------end		
	
	
	
	
	
 