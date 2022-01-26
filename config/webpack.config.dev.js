const HtmlWebpackPlugin = require('html-webpack-plugin') // html模板
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
}
