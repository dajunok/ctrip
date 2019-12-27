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
      path:path.resolve(__dirname,'./dist'),   //将输出文件都放到dist目录下   
      filename:'bundle.js',   //将所有依赖的模块合并输出到一个bundle.js文件      
      library:'myLibrary',    //library规定了组件库返回值的名字，也就是对外暴露的模块名称
      libraryTarget: 'umd',   //libraryTarget就是配置webpack打包内容的模块方式的参数：umd: 将你的library暴露为所有的模块定义下都可运行的方式。
    },
    module:{
      noParse:/jquery|chartjs/,     //不去解析jQuery与ChartJS中的依赖库 
      rules:[
        {          
          test:/\.css$/,  //用正则表达式去匹配要用该Loader转换的CSS文件
          use: [MiniCssExtractPlugin.loader,"css-loader"],
          include:[path.resolve(__dirname, "./src")],   //include：需要被loader处理的文件或文件夹
          parser: {  //parser 属性可以更细粒度地配置哪些模块语法被解析、哪些不被解析。同noParse配置项的区别在于，parser可以精确到语法层面，而noParse只能控制哪些文件不被解析。
              amd: true, // 如果为false则禁用 AMD
              commonjs: true, // 如果为false则禁用 CommonJS
              system: true, // 如果为false则禁用 SystemJS
              harmony: true, // 如果为false则禁用 ES2015 Harmony import/export
              requireInclude: true, // 如果为false则禁用 require.include
              requireEnsure: true, // 如果为false则禁用 require.ensure
              requireContext: true, // 如果为false则禁用 require.context
              browserify: true, // 如果为false则禁用特殊处理的 browserify bundle
              requireJs: true, // 如果为false则禁用 requirejs.*
              node: true, // 如果为false则禁用 __dirname, __filename, module, require.extensions, require.main 等。
              //node: {...} // 在模块级别(module level)上重新配置 node 层(layer)
          },
        }
      ]
    },
    resolve:{  //Webpack 在启动后会从配置的入口模块出发找出所有依赖的模块， Resolve配置Webpack如何寻找模块所对应的文件。 
      enforceExtension: false,    //如果是true，将不允许无扩展名(extension-less)文件。默认如果 ./foo 有 .js 扩展，require('./foo') 可以正常运行。但如果启用此选项，只有 require('./foo.js') 能够正常工作。默认false。
      extensions: [".js", ".json"],   //在导入语句没带文件后缀时， Webpack 会自动带上后缀后去尝试访问文件是否存在。
      modules: [path.resolve(__dirname, "src"), "node_modules"], //配置 Webpack 去哪些目录下寻找第三方模块，默认只会去nodemodules 目录下寻找。
    },
    resolveLoader:{   //这组选项与上面的 resolve 对象的属性集合相同，但仅用于解析 webpack 的 loader 包。默认如下：
        modules: [ 'node_modules' ],
        extensions: [ '.js', '.json' ],
        mainFields: [ 'loader', 'main' ]      
    },
    optimization: {  //优化配置
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
    devtool: 'eval-source-map', //方便浏览器调试（显示一个个未压缩的模块文件.js以供调试。eval-source-map针对开发模式）
    watch : true,   //Webpack 的监听模式，它支持监昕文件更新，在文件发生变化时重新编译。使用 Webpack ，监昕模式默认是关闭的。在使用 DevServer时， 监听模式默认是开启的。
    watchOptions: {
        ignored: /node_modules/,  //这个选项可以排除一些巨大的文件夹。也可以使用 anymatch模式，如：ignored: "files/**/*.js"
        aggregateTimeout: 300,
        poll: 1000
    },
    externals: {    //Externals 用来告诉在 Webpack 要构建的代码中使用了哪些不用被打包的模块，也就是说这些模板是外部环境提供的，Webpack在打包时可以忽略它们。
        jquery: 'jQuery',   
    },
/*    devServer: {
      //contentBase: path.join(__dirname, "dist"),
      hot: true,
      host:"192.168.254.100",
      compress: true,
      port: 9000
    }*/
};