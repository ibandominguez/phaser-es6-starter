const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[hash].js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], include: path.join(__dirname, 'src') },
      { test: /pixi\.js/, use: ['expose-loader?PIXI'] },
      { test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
      { test: /p2\.js/, use: ['expose-loader?p2'] }
    ]
  },
  resolve: {
    alias: {
      'phaser': path.join(__dirname, 'node_modules/phaser-ce/build/custom/phaser-split.js'),
      'pixi': path.join(__dirname, 'node_modules/phaser-ce/build/custom/pixi.js'),
      'p2': path.join(__dirname, 'node_modules/phaser-ce/build/custom/p2.js')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
    }),
    new HtmlWebpackPlugin({
      title: 'Phaser ES6 Starter',
      mobile: true,
      inject: false,
      // googleAnalytics: { trackingId: 'UA-XXXX-XX', pageViewOnLoad: true },
      // window: { env: {} },
      baseHref: '/',
      template: require('html-webpack-template'),
      meta: [],
      links: [
        { rel: 'icon', href: 'images/favicon.ico', type: 'image/x-icon' }
      ],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        minifyJS: true,
        minifyCSS: true
      }
    }),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, 'assets'), to: path.join(__dirname, 'build/assets')
    }])
  ]
}
