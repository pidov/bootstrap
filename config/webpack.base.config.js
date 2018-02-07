
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { forEach } = require('lodash')
const path = require('path')

const { dependencies } = require('../package.json')
const alias = require('./alias')

let vendor = []

forEach(dependencies, (version, packageName) => {
  // There's an issue with webpack and tarball pacakges,
  // so we filter them out until a better solution is found.
  if (!version.endsWith('.tar.gz')) {
    vendor.push(packageName)
  }
})

module.exports = {
  context: path.resolve('./'),
  entry: {
    app: [
      'babel-polyfill',
      './src/index.js'
    ],
    vendor
  },
  output: {
    path: path.resolve('dist/'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.jsx?$/,
      loader: 'standard-loader',
      exclude: /(node_modules|vendor)/,
      options: {
        error: false,
        parser: 'babel-eslint'
      }
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /(node_modules|vendor)/
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader?sourceMap']
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1, sourceMap: true } },
        'resolve-url-loader', {
          loader: 'postcss-loader',
          options: { sourceMap: true }
        },
        { loader: 'sass-loader', options: { relativeUrls: true, sourceMap: true } }
      ]
    }, {
      test: /\.(png|jpe?g|gif)$/,
      loader: 'file-loader?name=assets/[name].[hash].[ext]'
    },
    {
      test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
      loader: 'url-loader?importLoaders=1&limit=100000'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // this assumes your vendor imports exist in the node_modules directory
        return (module.context && module.context.indexOf('node_modules') !== -1) || count >= 2
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html.ejs',
      filename: 'index.html',
      hash: true
    })
  ],
  resolve: { alias }
}
