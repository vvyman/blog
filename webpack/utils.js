const path = require('path')

exports.resolvePath = function(targetPath) {
  return path.resolve(__dirname, '../', targetPath)
}