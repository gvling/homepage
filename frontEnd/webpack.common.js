const path = require('path');
pubDir = path.resolve(__dirname, './public');


module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: pubDir,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }]
    },{
      test: /\.(gif|png|jpg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 51200
        }
      }]
    },{
      // enforce: 'pre'がついていないローダーより早く処理が実行される
      // babel-loaderで変換する前にコードを検証したいため、指定が必要
      enforce: 'pre',
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter'),
          fix: true
        }
      }]
    }]
  },
};
