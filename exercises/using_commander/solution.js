var zork = require('commander');
 
zork
  .option('-m, --multiply',   'multiply')
  .option('-d, --divide',     'divide')
  .option('-a, --first <n>',  'first number')
  .option('-b, --second <n>', 'second number')
  .parse(process.argv);

if(zork.divide){
  console.log(zork.first / zork.second);
}
if(zork.multiply){
  console.log(zork.first * zork.second);
}
