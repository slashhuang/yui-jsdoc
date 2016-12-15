var yuiJsDoc = require('./yuiJsDoc.js');
var argv = require('yargs').argv;
var configFile = null;
if(argv && argv.config){
    configFile=argv.config;
}
yuiJsDoc.build(configFile);
