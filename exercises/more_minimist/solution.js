var minimist = require('minimist')
var minOpts = {};

minOpts.alias = {
  'multiply' : 'm',
  'divide'   : 'd',
  'first'    : 'a',
  'second'   : 'b'
};

var zork = minimist(process.argv.slice(2), minOpts);

if(zork.divide){
  console.log(zork.first / zork.second);
}
if(zork.multiply){
  console.log(zork.first * zork.second);
}
