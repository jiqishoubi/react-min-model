const { merge } = require('webpack-merge')
const config_base = require('./config/webpack.config.base')
const config_dev = require('./config/webpack.config.dev')
const config_prod = require('./config/webpack.config.prod')
const finalConfig = merge(config_base, process.env.MODE == 'production-mode' ? config_prod : config_dev)
console.log('finalConfig')
console.log(finalConfig)
module.exports = finalConfig
