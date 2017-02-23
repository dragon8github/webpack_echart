var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack=require("webpack");

module.exports = {
	entry : {
		app : [
			'webpack-dev-server/client?http://127.0.0.1:8892',
			__dirname + "/src/js/main.js"
		]
	},
	output : {
		 publicPath: "http://127.0.0.1:8892/",
		 path: __dirname+'/build/js', 
         filename:'[name].js'   
	},
	resolve: {
        alias: {
            css: __dirname + '/src/css/',
            js : __dirname + '/src/js/'
        }
    },
	module : {
		loaders : [
		   {test:/\.js$/,loader:"babel-loader", query: { compact:true },exclude: /node_modules/},
		   {test:/\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,loader:"file-loader" },
           {test: /\.css$/,loader: 'style-loader!css-loader'},
           {test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,loader: 'file-loader',query: {name: '[name].[ext]?[hash]'}}
		]
	},
	plugins : [
		 new HtmlWebpackPlugin({
            filename:"index.html",  
            // filename:__dirname + "/build/index.html", 
            template: __dirname+'/src/index.html',
            inject:'body',
            hash:true,
            chunks:["app"]
        })
	]
};