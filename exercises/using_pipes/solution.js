var input = '';

process.stdin.on('readable', function() {
  input += process.stdin.read() || '';
});

process.stdin.on('end', function() {
  // input contains all data from stdin now
  // 1. split into lines
  // 2. output each line that matches 'thou' (case insensitive)
  input.split('\n').forEach(function(line) {
    if (line.toLowerCase().indexOf('thou') !== -1) {
      console.log(line);
    }
  });
});
