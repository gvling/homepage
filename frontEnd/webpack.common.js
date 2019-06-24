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
      // enforce: 'pre'$B$,$D$$$F$$$J$$%m!<%@!<$h$jAa$/=hM}$,<B9T$5$l$k(B
      // babel-loader$B$GJQ49$9$kA0$K%3!<%I$r8!>Z$7$?$$$?$a!";XDj$,I,MW(B
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
