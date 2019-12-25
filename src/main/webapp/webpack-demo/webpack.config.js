const path=require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");          //webpack内置.js文件压缩插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");    //将css单独打包成一个文件的插件，它为每个包含css的js文件都创建一个css文件。它支持css和sourceMaps的按需加载。
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");  //该插件用于优化及压缩CSS资源
module.exports={
    context:path.resolve(__dirname,'src'),   //基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader
    // webpack会根据mode进行对Js打包，development压缩，production下面自动压缩，亲测没有问题
    mode:"development", // production：生产模式； development：开发模式    
    entry:'./main.js',  //JavaScript执行入口文件
    output:{      
      filename:'bundle.js',   //将所有依赖的模块合并输出到一个bundle.js文件      
      path:path.resolve(__dirname,'./dist')   //将输出文件都放到dist目录下
    },
    module:{      
      rules:[
        {          
          test:/\.css$/,  //用正则表达式去匹配要用该Loader转换的CSS文件
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
    ],
/*    devServer: {
      //contentBase: path.join(__dirname, "dist"),
      hot: true,
      host:"192.168.254.100",
      compress: true,
      port: 9000
    }*/
};