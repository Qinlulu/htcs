var webpack = require('webpack');

var path = require('path');

//用来进行将css  生成一个文件 而不是直接嵌在文档中
var extractText = require('extract-text-webpack-plugin');

module.exports = {

	entry: {
		bundle: './entry'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module:{

		rules:[
			{
				test:/\.css$/,
					use:['style-loader','css-loader']
			},
			{
				test:/\.less$/,//依赖less-loader less
				//use:['style-loader','css-loader','less-loader']
				use:extractText.extract({
					use:['css-loader','less-loader']
				})
			},
            {
                test:/\.sass$/,//依赖sass-loader node-sass
                use:['style-loader','css-loader','sass-loader']
                
            },
            {
                test:/\.scss$/,//依赖sass-loader node-sass
                use:['style-loader','css-loader','sass-loader']
                
            }]
	},

	plugins:[
		//新的css文件的名称
        new extractText('bundle.css'),
        //用于进行代码的压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        })
	]


};