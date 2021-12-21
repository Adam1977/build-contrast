const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    main1: './index.js',
    main2: './b.js'
  },
  output: {
    path: path.resolve(__dirname, 'webpack_dist'),
    filename: '[name].[contenthash].bundle.js'
  },
  /**
  optimization: {
    minimize: true, //代码压缩,将1080k的文件瞬间压缩到了297k
    minimizer: [new UglifyJsPlugin({ sourceMap: true })],
    //UglifyJsPlugin用来对js文件进行压缩，从而减小js文件的大小，加速load速度,但是会拖慢webpack的编译速度，所有建议在开发简单将其关闭，部署的时候再将其打开。
    splitChunks: {
      minSize: 30000, // 3kb   表示在压缩前的最小模块大小,默认值是30kb
      chunks: "all", //同时分割同步和异步代码,推荐。
      automaticNameDelimiter: "_", //名称分隔符，默认是~
      cacheGroups: {
        //默认的规则不会打包,需要单独定义
        sync: {
          // sync.js不会被打包到index.js里面
          name: "sync", // 如果此处不写，默认名字胃sync~[name].js (sync~index.js)
          chunks: "all", // 异步和非异步块之间也可以共享块
          test: /sync\.js/,
          enforce: true, // //WebPack忽略splitChunks.minSize，splitChunks.minChunks，splitChunks.maxAsyncRequests和splitChunks.maxInitialRequests选项
        },
        jquery: {
          // 将jquery抽出来
          name: "jquery",
          chunks: "all",
          test: /jquery\.js/,
          enforce: true,
        },
      },
    },
  }, */
  module: {
    rules: [
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
    ]
  },
  plugins: [
    // new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './index.html' })
  ]
}
