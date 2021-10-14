const { merge } = require('webpack-merge')
const path = require('path')

const config = require('./webpack.config')

module.exports = merge(config, {
  devServer: {
    open: true,
  },
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'public'),
  },
})
