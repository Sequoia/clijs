'use strict';

var fs           = require('fs');
var path         = require('path');
var chalk        = require('chalk');
var cp           = require('child_process');
var stream       = require('stream');
var verify       = require('adventure-verify');

exports.problem     = fs.readFileSync(path.join(__dirname, 'problem.md'), 'utf8');
exports.solution    = fs.readFileSync(path.join(__dirname, 'solution.js'), 'utf8');
exports.boilerplate = fs.readFileSync(path.join(__dirname, 'boilerplate.js'), 'utf8');

exports.verify = verify({ modeReset: true }, function (args, t) {

  // define test cases
  var cases = [
    {word: "thou",   lines: 4},
    {word: "dagger", lines: 2},
    {word: "eyes",   lines: 2}
  ];

  // verify each test case
  cases.forEach(function(test) {
    // child args
    var childArgs = args.concat("--word="+test.word);

    // create child process
    t.comment("running: " + process.execPath + " " + childArgs.join(" "));
    var child = cp.spawnSync(process.execPath, childArgs, {
      input: fs.readFileSync(path.join(__dirname, 'macbeth.txt'))
    });

    // get output of child process; trim whitespace
    var actual = child.stdout.toString().replace(/^\s+|\s+$/, '');

    // verify number of lines
    var lines  = actual.split(/\n/);
    t.equal(lines.length, test.lines, 'There should be ' + test.lines + ' matching lines');

    // check if 'thou' is in each line
    var isThou = lines.every(function(line) {
      return line.toLowerCase().indexOf(test.word) !== -1;
    });
    t.ok(isThou, "'" + test.word + "' should be present in each line");
  });

  // done
  t.end();
});

exports.run = function(args) {
  console.info(chalk.yellow("running: %s %s"), process.execPath, args.join(' '));
  var child = cp.spawnSync(process.execPath, args, {
    input: fs.readFileSync(path.join(__dirname, 'macbeth.txt'))
  });
  process.stdout.write(child.stdout);
  process.stderr.write(child.stderr);
};
