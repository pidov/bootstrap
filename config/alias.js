'use strict'
const path = require('path')
const fs = require('fs')

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
  '@styles': resolveApp('src/styles'),
  '@components': resolveApp('src/components'),
  '@store': resolveApp('src/store'),
  '@layouts': resolveApp('src/layouts')
}
