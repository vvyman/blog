const { resolvePath } = require('./utils')
const plugins = require('./plugins')

module.exports = function(env) {

  return {

    mode: 'production',

    entry: {
      'entry': resolvePath('src/entry.js')
    },

    output: {
      path: resolvePath('publish'),
      filename: 'assets/js/web-[name].[chunkhash].js'
    },

    plugins: plugins(env)
  }
}