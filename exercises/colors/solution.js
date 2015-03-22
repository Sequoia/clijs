var chalk = require('chalk');
var argv = require('minimist')(process.argv.slice(2));

var messages = require(argv._[0]);
var type = argv.type || false;

var log = {
  error : chalk.bold.bgRed,
  info  : chalk.blue,
  warning : chalk.yellow.underline
}

messages.forEach(function(msg){
  if(type && msg.type !== type){
    return;
  }
  console.log(log[msg.type](msg.message));
});
