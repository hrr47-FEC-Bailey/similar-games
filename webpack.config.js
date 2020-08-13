var path = require('path');
var SRC_DIR = path.join(__dirname, '/client');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  target: "node",
  output: {
    filename: 'bundle.js',
    //path: DIST_DIR,
    publicPath:'/'

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
};
