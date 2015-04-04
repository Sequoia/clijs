
process.stdin.on('readable', function() {
  console.log("reading:", process.stdin.read());
});

process.stdin.on('end', function() {
  console.log("-- all done --");
});
