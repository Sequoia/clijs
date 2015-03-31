var argv = require('minimist')(process.argv.slice(2));
var Table = require('cli-table');
var data = require(argv._[0]);

var table = new Table({
  head: ['Name', 'Favorite Color', 'Children'],
  colWidths: [25, 18, 10]
});

data.forEach(function(person){
  table.push([ person.name, person.color, person.children.length ]);
});

console.log(table.toString());
