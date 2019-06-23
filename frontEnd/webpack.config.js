 publidDir = __dirname + '/public';

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: publidDir,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      // enforce: 'pre'がついていないローダーより早く処理が実行される
      // babel-loaderで変換する前にコードを検証したいため、指定が必要
      enforce: "pre",
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'eslint-loader'
      }]
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }]
    }]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: publidDir
  }
};
