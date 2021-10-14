const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

const config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    path: path.join(__dirname, 'public'),
  },
})
