var argv = require('minimist')(process.argv.slice(2));

console.log("matching lines with:", argv.word);

process.stdin.on('readable', function() {
  console.log("reading:", process.stdin.read());
});

process.stdin.on('end', function() {
  console.log("-- all done --");
});
