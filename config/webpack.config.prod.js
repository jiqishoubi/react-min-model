const path = require('path')
module.exports = {
  mode: 'production',
  entry: './src/redux/index.js',
  output: {
    path: path.resolve(__dirname, '../npmdist'),
    filename: 'react-min-model.min.js',
    clean: true, // 每次构建清理dist
    // 发布 // 解决发布npm后，引入包 为空对象的问题
    library: 'formlin',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  plugins: [],
  devtool: false,
  // npm发包配置
  // 借鉴 https://zhuanlan.zhihu.com/p/93773786
  // 在 webpack 配置中将 react 和 react-dom 标记为 externals（这同时要求 output.libraryTarget 为 umd ），使轮子库可以在运行时获取到宿主环境的依赖
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
}
