const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolvePath } = require('../utils')

module.exports = function(env) {

  return [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolvePath('src/index.html'),
      chunks: ['runtime', 'vendors', 'main'],
    })
  ]
}