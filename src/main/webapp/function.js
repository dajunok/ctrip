/**
 * 页面通用函数
 */

/*-----------------------------------实现暂停函数*/
//--方法1
 function sleep(ms){
	 return new Promise(function(resolve, reject) {
		 setTimeout(resolve, ms)})
}


//--方法2
function sleep2(sleepTime){
    var start=new Date().getTime();
    while(true){
        if(new Date().getTime()-start>sleepTime){
            break;    
        }
    }
}
//--方法3
function sleep3(d){
  for(var t = Date.now();Date.now() - t <= d;);
}
//--方法4
function sleep4(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}



/* 颜色过渡函数*/
