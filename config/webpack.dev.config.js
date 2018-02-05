const webpack = require('webpack')

module.exports = {
  devtool: 'inline-source-map', // source-map for prod
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?overlay=false'
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
