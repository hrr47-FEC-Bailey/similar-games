var path = require('path');
var SRC_DIR = path.join(__dirname, '/server');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  "target": "node",
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          'presets': [['@babel/preset-env',{ "targets": { "node":"current" }}], '@babel/preset-react']
        }
      }
    ]
  }
};
