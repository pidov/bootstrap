const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const prodConfig = require('./webpack.prod.config')
const merge = require('webpack-merge')
const { mergeWith, isArray } = require('lodash')

const concatArrays = (objValue, srcValue) => {
  if (isArray(objValue)) return srcValue.concat(objValue)
}

const env = process.env.NODE_ENV
const envConfig = env === 'production' ? prodConfig : devConfig

const createConfig = merge.smartStrategy({
  entry: 'prepend',
  'module.rules.use': 'replace'
})

const config = createConfig(baseConfig, envConfig)

module.exports = config
