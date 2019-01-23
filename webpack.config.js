const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  
  mode: 'development',

  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }, 

  devtool: 'inline-source-map',
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
 

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]

};

