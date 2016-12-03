#! /usr/bin/env nodejs
var getConfigs = function(){
  var fs = require('fs');
  var path = "docs/configs";
  var files = fs.readdirSync(path);
  if(files.length === 0){
    console.log("Wolf: Error: No Valid Magazines Found.");
    process.exit(2);
  }
  return files.filter(function(elem){
    return elem.endsWith(".json");
  });
}
var listConfigs = function () {
  var files = getConfigs();
  files.forEach(function(elem,index){
    console.log("Wolf: ",index+1,elem);
  });
};
var parseArguments = function () {
  var args = require('args');
  args.option('format', 'Enter an output format.', 'html');
  args.option('config', 'Confiig File Name');
  args.option('list', 'List Valid Configuration Files.');
  var flags = args.parse(process.argv);
  return flags;
};
var start = function () {
  var flags = parseArguments();
  if(flags.list){
    listConfigs();
    process.exit(0);
  }
  if (!flags.config) {
    console.log("Wolf: Error: No Config Specified.");
    process.exit(1);
  }
  console.log("Wolf: Using format:", flags.format);
};

start();
