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
		 path: __dirname+'/build/js',  //����ļ���
         filename:'[name].js'   //���մ�����ɵ��ļ���(just �ļ���������·����Ŷ)
	},
	plugins : [
		 new HtmlWebpackPlugin({
            filename:"index.html",  // Ϊ������ȱ���
            template: __dirname+'/src/index.html',//ģ���ļ�
            inject:'body',
            hash:true,
            chunks:["app"]
        })
	]
};