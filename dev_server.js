var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

const PORT = 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: 'public/',
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(PORT, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }
  console.log("Listening at localhost:"+PORT);
});
