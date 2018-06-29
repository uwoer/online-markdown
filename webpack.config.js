var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  //插件项
  // plugins: [commonsPlugin],
  //页面入口文件配置
  entry: {
    index : './src/js/index.js'
  },
  //入口文件输出配置
  output: {
    path:path.resolve(__dirname, 'docs/js'),
    filename: '[name].js'
  },
  module: {
    //加载器配置
    rules: [
      { test: /\.css$/, use: ['style-loader','css-loader'] },
      { test: /\.js$/, use: [{
        loader: 'jsx-loader',
        options:{
          harmony: true
        }
      }]},
      { test: /\.less$/, use: ['style-loader','css-loader',
        {loader: 'less-loader',options:{sourceMap: true}}]},
      { test: /\.(png|jpg)$/, use: [ {
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]}
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: path.join(__dirname, './src/css/pageThemes'),
        from: '*',
        to: '../pageThemes',
        force: true
      },
      {
        context: path.join(__dirname, './src/imgs'),
        from: '*',
        to: '../imgs',
        force: true
      },
      {
        context: path.join(__dirname, './src/css/themes'),
        from: '*',
        to: '../themes',
        force: true
      },
      {
        context: path.join(__dirname, './src'),
        from: "index.html",
        to: '../index.html',
        force: true
      },
      {
        context: path.join(__dirname, './src'),
        from: "demo.md",
        to: '../demo.md',
        force: true
      },
      {
        context: path.join(__dirname, './src'),
        from: "favicon.ico",
        to: '../favicon.ico',
        force: true
      },
      {
        context: path.join(__dirname, './src'),
        from: "CNAME",
        to: '../CNAME',
        toType: 'file',
        force: true
      }
    ])
  ]
};
