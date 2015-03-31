var argv = require('minimist')(process.argv.slice(2));
var Table = require('cli-table');

var people = require(argv._[0]);
console.log(people);

//var table = new Table({ /*...*/ });

//console.log(table.toString());
