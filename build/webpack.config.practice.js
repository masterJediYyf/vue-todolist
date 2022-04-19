const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base');
const merge = require('webpack-merge');

const defaultPlugins = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'template.html')
  })
];

const devServer = {
  port: 8080,
  host: '127.0.0.1', // 监听地址
  hot: true
};

let config
config = merge(baseConfig, {
  entry: path.join(__dirname, '../practice/index.js'),
  devtool: '#cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          'vue-style-loader',
          // 'css-loader',
          {
            loader: 'css-loader',
            options: {
              module: true,
              localIdentName: '[path]-[name]-[hash:base64:5]'// css 类名命名规则
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  devServer,
  // import vue from 'vue'
  resolve: {
    alias: {
      'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  plugins: defaultPlugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ])
})

module.exports = config;
