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

var words       = ipsum({ count:5, units:'words' }).split(' ');
var word        = words[0]; 
var wordSwitch  = util.format('--%s=%s','word', word);
var shortSwitch = '-' + words[1].substr(0,_.random(3));
var longSwitch  = util.format('--%s=%s',words[2],words[3]);

//three ways of sending --word={word}
//@TODO change quoted arg to extra-arg
var argVariants = [
  [wordSwitch],
  ['--word',word],
  [shortSwitch, wordSwitch, longSwitch]
];

exports.verify = verify({ modeReset: true }, function (args, t) {
  argVariants.forEach(function(myargs){
    var ps = cp.spawnSync(process.execPath, args.concat(myargs));
    var argStr = myargs.join(' ');
    var output = ps.stdout.toString().trim();
    t.equal(output, word, argStr);
  });
  t.end();
});

exports.run = function(args) {
  args = args.concat(_.sample(argVariants));
  var commandString = chalk.yellow(process.execPath + ' ' + args.join(' '));
  console.info('running: ' + commandString);
  var ps = cp.spawn(process.execPath, args)
  ps.stdout.pipe(process.stdout);
  ps.stderr.pipe(process.stderr);
}
