const path=require('path');  //引入Node.js的path模块
const Hello=require('./hello.js');
const show=require('./show.js');

console.log(__filename);
console.log(__dirname);     //F:\SpringSource\projects\ctrip\src\main\webapp\webpack-demo\src
console.log(path.resolve(__dirname,'../dist')); //F:\SpringSource\projects\ctrip\src\main\webapp\webpack-demo\dist
console.log(path.resolve(__dirname,'app'));     //F:\SpringSource\projects\ctrip\src\main\webapp\webpack-demo\src\app
console.log('[name]');
hello = new Hello(); 
hello.setName('BYVoid'); 
hello.sayHello(); 

show('webpack');
