/**
 * We just require 3 libraries: webpack, the dev server of webpack and our config file
 */
var WebpackDevServer = require('webpack-dev-server'),
    webpack = require('webpack'),
    config = require('./webpack.config.js');

/**
 * First, we need to compile our configuration, let's translate our configuration to webpack instrutions.
 * This process is exactly the same that we see when we run just webpack, it will create a new "bundle" file
 */
var compiler = webpack(config);

/**
 * Then, we need to create a new server, we need to pass 2 parameters: our compiled configuration and the server options
 * 
 * NOTE: we don't need to add a watcher to our files, because the server will add automatically a watcher to all the files used
 * in our config file, so if you change something, the dev server will generate a new bundle...
 */
var server = new WebpackDevServer(compiler,{
  contentBase:'./src/',
  noInfo:false,
  stats:{
    colors:true
  }
});

/**
 * And finally...START THE SERVER! :D
 * 
 * NOTE: the first parameter will be the port and the second one the callback executed when the server is successfully launched...
 */
server.listen(process.env.PORT,function(){
  console.log("Server is listening");
});