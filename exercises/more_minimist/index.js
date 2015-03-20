"use strict"

var _            = require('lodash');
var fs           = require('fs');
var cp           = require('child_process');
var verify       = require('adventure-verify');
var chalk        = require('chalk');

exports.problem = fs.readFileSync(__dirname + '/Readme.md', 'utf8');
exports.solution = fs.readFileSync(__dirname + '/solution.js', 'utf8');
exports.boilerplate = fs.readFileSync(__dirname + '/boilerplate.js', 'utf8');

var mult_a   = _.random(10);
var mult_b   = _.random(10);
var mult_out = mult_a * mult_b

var div_b    = _.random(5);
var div_out  = _.random(10);
var div_a    = div_b * div_out;

var argVariants = [
  ['--multiply','--first', mult_a, '--second', mult_b],
  ['--divide','-a', div_a, '-b', div_b],
  ['-m','-a'+mult_a.toString() , '-b'+mult_b.toString()],
  ['-d','--first='+div_a.toString() , '--second='+div_b.toString()]
];

//spawn process for each and test output
exports.verify = verify({ modeReset: true }, function (args, t) {
  argVariants.forEach(function(myargs){
    var ps = cp.spawnSync(process.execPath, args.concat(myargs));
    var argStr = myargs.join(' ');
    var result = _.includes(myargs[0],'m')
      ? mult_out
      : div_out;
    var output = parseInt(ps.stdout.toString().trim());
    t.equal(output, result, argStr);
  });
  t.end();
});

exports.run = function(args) {
  args = args.concat(_.sample(argVariants));
  console.info('running: ' + chalk.yellow(process.execPath + ' ' + args.join(' '))+'');
  var ps = cp.spawn(process.execPath, args)
  ps.stdout.pipe(process.stdout);
}
