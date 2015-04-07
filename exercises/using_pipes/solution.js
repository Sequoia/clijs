var argv = require('minimist')(process.argv.slice(2));

var input = '';

process.stdin.on('readable', function() {
  input += process.stdin.read() || '';
});

process.stdin.on('end', function() {
  // input contains all data from stdin now
  // 1. split into lines
  // 2. output each line that matches the --word argument (case insensitive)
  input.split('\n').forEach(function(line) {
    if (line.toLowerCase().indexOf(argv.word) !== -1) {
      console.log(line);
    }
  });
});
