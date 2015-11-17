var path = require('path');
var config = {
  entry: path.resolve(__dirname, 'src/app.js'),
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'app.js'
  },
  module: {
    loaders: [{ test: /\.js?$/, loader: 'babel' },
    { test: /\.(scss|css)$/, loader: 'style!css!sass'}]
  }
};

module.exports = config;
