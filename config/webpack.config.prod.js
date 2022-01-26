const path = require('path')
module.exports = {
  mode: 'production',
  entry: './src/redux/index.js',
  output: {
    path: path.resolve(__dirname, '../npmdist'),
    filename: 'react-min-model.min.js',
    clean: true, // 每次构建清理dist
  },
  plugins: [],
  devtool: false,
}
