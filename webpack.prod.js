const path = require('path');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const common = require('./webpack.common.js');

imgDir = path.resolve(__dirname, './src/assets/images')


module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 6,
          compress: true,
          output: {
            comments: false,
            beautify: false
          }
        }
      })
    ]
  },
  plugins: [
    //new CopyWebpackPlugin([
    //  {
    //    from: imgDir,
    //    to: path.resolve(pubDir, './img/'),
    //  }
    //]),
    //new ImageminPlugin([{
    //  test: /\.(jpe?g|png|gif|svg)$/i,
    //  pngquant: {
    //    quality: '95-100',
    //  }
    //}])
  ]
});
