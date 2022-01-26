const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin') // html模板
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    // 全局自动引入react // 不用每个文件都 import React from 'react'
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
}
