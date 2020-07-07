const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        include: [
            path.resolve(__dirname, './src/img/')  // а тут надо прописать имя папки откуда будет брать все картинки
        ],
        use: [{
            loader: 'file-loader',
            options: {
                name: './public/img/[hash].[ext]', 
            }
        }]
    },
    {
        test: /\.(ttf|eot|woff|woff2|png|jpg|jpeg|svg|gif)$/,
        loader: 'url-loader'
    },
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};