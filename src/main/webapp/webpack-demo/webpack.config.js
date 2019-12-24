const path=require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");          //webpack内置.js文件压缩插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");    //将css单独打包成一个文件的插件，它为每个包含css的js文件都创建一个css文件。它支持css和sourceMaps的按需加载。
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");  //该插件用于优化及压缩CSS资源
module.exports={
    // webpack会根据mode进行对Js打包，development压缩，production下面自动压缩，亲测没有问题
    mode:"production", // production：生产模式； development：开发模式
    //JavaScript执行入口文件
    entry:'./src/main.js',
    output:{
      //将所有依赖的模块合并输出到一个bundle.js文件
      filename:'bundle.js',
      //将输出文件都放到dist目录下
      path:path.resolve(__dirname,'./dist')
    },
    module:{      
      rules:[
        {
          //用正则表达式去匹配要用该Loader转换的CSS文件
          test:/\.css$/,
          use: [MiniCssExtractPlugin.loader,"css-loader"]
        }
      ]
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    plugins:[
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "[name].css",
          chunkFilename: "[id].css"
        })
    ]
};