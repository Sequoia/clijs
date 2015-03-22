"use strict"

var fs      = require('fs');
var path    = require('path');
var chalk   = require('chalk');
var spawn = require('child-process-promise').spawn;
var cp      = require('child_process');
var verify  = require('adventure-verify');
var Q       = require('q');
var async   = require('async');

exports.problem = fs.readFileSync(__dirname + '/Readme.md', 'utf8');
exports.solution = fs.readFileSync(__dirname + '/solution.js', 'utf8');
exports.boilerplate = fs.readFileSync(__dirname + '/boilerplate.js', 'utf8');

var solutionPath = path.join(__dirname, '/solution.js');
var msgJsonPath = path.join(__dirname,'messages.json');

var calls = [
  { switches : [], linesExpected : 8 },
  { switches : ['--type=warning'], linesExpected : 2 },
  { switches : ['--type', 'info'], linesExpected : 3 },
  { switches : ['--type=error'], linesExpected : 3 }
];

var linesExpected = [ 8, 3, 3, 2 ];
function opts(){
  //hack https://github.com/patrick-steele-idem/child-process-promise/issues/10
  return {
    env: { 'FORCE_COLOR' : true }, //force chalk to pipe colors
    capture: ['stdout','stderr']
  };
}

exports.verify = verify({ modeReset: true}, function (args, t) {

  var theirScript = args[0];
  if(!path.isAbsolute(theirScript)){
    theirScript = path.join(process.cwd(), theirScript);
  }

  
  async.eachSeries(calls, function(call, done){
    var theirargs = [theirScript, msgJsonPath].concat(call.switches)
    var myargs    = [solutionPath, msgJsonPath].concat(call.switches);

    Q.Promise(function(resolve){
      sayRunning(theirargs);
      process.nextTick(resolve);
    })
    .then(function(){
      return [
        spawn(process.execPath, theirargs, opts()),
        spawn(process.execPath, myargs, opts())
      ];
    })
    .spread(function(theirs, mine){
      console.log(theirs.stdout);
      
      //@todo there's probably a better way to do this
      var numLines = theirs.stdout.toString().split('\n').length -1;
      t.equal(numLines, call.linesExpected, 'correct number of messages printed');
      //return [theirs.stdout.toString(), mine.stdout.toString()];
      return [theirs, mine];
    })
    .spread(function(theirs,mine){
      t.ok((theirs.stdout.toString() === mine.stdout.toString()), 'messages formatted correctly');
      t.skip('(ignore this test)'); //@FIXME HAAAAAAAACK
      //@todo final test ALWAYS outputs AFTER `console.log(theirs.stdout) above
      done();
    })
    .catch(function(err){
      console.log(err);
      done(err);
    });
  },function(err){
    t.end();
  });
});

exports.run = function() {
  var args = process.argv.slice(3);

  var theirScript = args[0];
  if(!path.isAbsolute(theirScript)){
    theirScript = path.join(process.cwd(), theirScript);
  }

  var theirargs = [theirScript, msgJsonPath].concat(args.slice(1));

  sayRunning(theirargs);
  var ps = cp.spawn(process.execPath, theirargs, opts())
  ps.stdout.pipe(process.stdout);
  ps.stderr.pipe(process.stderr);
  
}

function sayRunning(args){
  console.log('running ' + chalk.magenta('node ' + args.join(' ')));
}
