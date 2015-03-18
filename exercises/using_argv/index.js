"use strict"

var ipsum        = require('lorem-ipsum');
var util         = require('util');
var _            = require('lodash');
var fs           = require('fs');
var path         = require('path');
var cp           = require('child_process');
var verify			 = require('adventure-verify');

exports.problem = fs.readFileSync(__dirname + '/problem.md', 'utf8');
exports.solution = fs.readFileSync(__dirname + '/solution.js', 'utf8');
exports.boilerplate = fs.readFileSync(__dirname + '/boilerplate.js', 'utf8');

var word = ipsum({ count:1, units:'words' });

//three ways of sending --word={word}
var argVariants = [
  [util.format('--word=%s',word)],
  [util.format('--word="%s"',word)],
  ['--word',word]
];

exports.verify = verify({ modeReset: true }, function (args, t) {
	argVariants.forEach(function(svitch){
		args.push(svitch);
		args = _.flatten(args);
		var ps = cp.spawnSync(process.execPath, args);
		if(_.isArray(svitch)){
			svitch = svitch.join(' ');
		}
		t.equal(ps.stdout.toString().trim(), word, svitch);
		args.pop();
	});
	t.end();
});

exports.run = function(args) {
  args.push(argVariants[0]);
  var ps = cp.spawn(process.execPath, args)
	ps.stdout.pipe(process.stdout);
}
