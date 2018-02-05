const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true,
            minimize: true,
            discardComments: { removeAll: true }
          }
        }]
      })
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true,
            discardComments: { removeAll: true }
          }
        }, 'resolve-url-loader', {
          loader: 'postcss-loader',
          options: { sourceMap: true }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            discardComments: { removeAll: true }
          }
        }]
      })
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/'], {
      root: path.resolve('./'),
      verbose: true,
      dry: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      exclude: /(\.manager\.js|\.pub\.js)/i,
      sourceMap: true,
      mangle: false,
      compress: {
        warnings: true,
        screw_ie8: true
      },
      comments: false
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash].css',
      allChunks: true
    })
  ]
}
