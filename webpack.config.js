const path = require('path');
module.exports = {
  mode: 'development',
  entry: './client/index.jsx',
  output: {

    path: path.join(__dirname + "/public"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        // include: path.resolve(__dirname, 'client'),
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}