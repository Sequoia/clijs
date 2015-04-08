"use strict"

var ipsum        = require('lorem-ipsum');
var util         = require('util');
var _            = require('lodash');
var fs           = require('fs');
var path         = require('path');
var chalk        = require('chalk');
var cp           = require('child_process');
var verify       = require('adventure-verify');

exports.problem = fs.readFileSync(__dirname + '/Readme.md', 'utf8');
exports.solution = fs.readFileSync(__dirname + '/solution.js', 'utf8');
exports.boilerplate = fs.readFileSync(__dirname + '/boilerplate.js', 'utf8');

var word        = ipsum({ count:1, units:'words' });
var wordSwitch  = util.format('--%s=%s','word', word);

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.equal(args.length, 1, 'Passed YOURFILE.js (clijs verify YOURFILE.js)');
  args.push(wordSwitch);
  var ps = cp.spawnSync(process.execPath, args);
  var argStr = args.join(' ');
  var output = ps.stdout.toString().trim();
  var error = ps.stderr.toString().trim();
  if(error.length){
    t.fail('script threw an error:');
    console.error(error);
  }
  t.equal(output, word, argStr);
  t.end();
});

exports.run = function(args) {
  args.push(wordSwitch);
  var ps = cp.spawnSync(process.execPath, args);
  var commandString = chalk.yellow(process.execPath + ' ' + wordSwitch);
  console.info('running: ' + commandString);
  var ps = cp.spawn(process.execPath, args)
  ps.stdout.pipe(process.stdout);
  ps.stderr.pipe(process.stderr);
}
