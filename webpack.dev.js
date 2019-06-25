const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');



module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: pubDir,
    host: '0.0.0.0',
    disableHostCheck: true
  }
});
