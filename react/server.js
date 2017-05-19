var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

const PORT = process.env.PORT || 3001

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/
    }
  })
  .listen(PORT, '0.0.0.0', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Running on port ', PORT);
  });
