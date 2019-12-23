const path=require('path');
module.exports={
    //JavaScript执行入口文件
    entry:'./src/main.js',
    output:{
      //将所有依赖的模块合并输出到一个bundle.js文件
      filename:'bundle.js',
      //将输出文件都放到dist目录下
      path:path.resolve(__dirname,'./dist')
    }
};