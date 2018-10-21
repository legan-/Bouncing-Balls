const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devServer: {
    host: 'localhost',
    quiet: true,
    port: 3000,
    open: true,
  },
  devtool: 'inline-source-map',
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Bouncing Balls',
      template: path.resolve(__dirname, 'src') + '/index.html',
      filename: path.resolve(__dirname, 'build') + '/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
    ],
  },
};
