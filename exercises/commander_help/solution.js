var program = require('commander');
 
program
  .version('1.2.3')
  .option('-t, --table', 'output in table format (default)')
  .option('-j, --json',  'output json')
  .option('-f, --file <name>',  'input file path');

program.on('--help', function(){
  console.log('Examples:');
  console.log('  Output in file in default format');
  console.log('  $ bloop --file=myfile.csv');
  console.log('  Output in file in json (short switches)');
  console.log('  $ bloop -jf myfile.csv');
});

program.parse(process.argv);
