var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack=require("webpack");

module.exports = {
	entry : {
		app : [
			'webpack-dev-server/client?http://127.0.0.1:8890',
			__dirname + "/src/js/main.js"
		]
	},
	output : {
		 publicPath: "http://127.0.0.1:8890/",
		 path: __dirname+'/build/js',  //输出文件夹
         filename:'[name].js'   //最终打包生成的文件名(just 文件名，不带路径的哦)
	},
	plugins : [
		 new HtmlWebpackPlugin({
            filename:"index.html",  // 为了配合热编译
            template: __dirname+'/src/index.html',//模板文件
            inject:'body',
            hash:true,
            chunks:["app"]
        })
	]
};