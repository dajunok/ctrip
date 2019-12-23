const path=require('path');  //引入Node.js的path模块
const Hello=require('./hello.js');
const show=require('./show.js');

console.log(__filename);
console.log(__dirname);
console.log(path.resolve(__dirname,'../dist'));
hello = new Hello(); 
hello.setName('BYVoid'); 
hello.sayHello(); 

show('webpack');
