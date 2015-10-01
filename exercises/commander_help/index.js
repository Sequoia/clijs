(function(){
"use strict";

var fs      = require('fs');
var path    = require('path');
var cp      = require('child_process');
var verify  = require('adventure-verify');
var _       = require('lodash');

exports.problem = fs.readFileSync(__dirname + '/Readme.md', 'utf8');
exports.solution = fs.readFileSync(__dirname + '/solution.js', 'utf8');
exports.boilerplate = fs.readFileSync(__dirname + '/boilerplate.js', 'utf8');

var solutionPath = path.join(__dirname, '/solution.js');

exports.verify = verify({ modeReset: true}, function (args, t) {

  var theirScript = args[0];
  var mine, theirs;

  if(!path.isAbsolute(theirScript)){
    theirScript = path.join(process.cwd(), theirScript);
  }
  
  //1. version
  t.comment('node ' + theirScript + ' --version');
  theirs = cp.spawnSync(process.execPath, [theirScript,  '--version']);
  mine   = cp.spawnSync(process.execPath, [solutionPath, '--version']);
  t.equal(theirs.stdout.toString(), mine.stdout.toString(), 'reports version 1.2.3');
  //
  //2. switch info
  t.comment('node ' + theirScript + ' --help');
  theirs = cp.spawnSync(process.execPath, [theirScript,  '--help']);
  mine   = cp.spawnSync(process.execPath, [solutionPath, '--help']);
  var outs = [
    theirs.stdout.toString().split('\n'),
    mine.stdout.toString().split('\n')
  ];
  //sometimes you just don't care about readability ¯\_(ツ)_/¯
  var tables = getUsageLines(outs, '--table');
  var jsons  = getUsageLines(outs, '--json');
  var files  = getUsageLines(outs, '--file');
  function getUsageLines(ray, svitch){
    return outs.map(function(ray){
      return _.find(ray,function(str){
        return _.contains(str, svitch);
      });
    });
  }

  t.equal(tables[0], tables[1], '--table usage string matches');
  t.equal(jsons[0], jsons[1],   '--json  usage string matches');
  t.equal(files[0], files[1],   '--file  usage string matches');
  //3. custom help
  t.comment('checking for examples...');
  t.ok(_.contains(theirs.stdout.toString(),'$ bloop --file=myfile.csv'), '$ bloop --file=myfile.csv');
  t.ok(_.contains(theirs.stdout.toString(),'$ bloop -jf myfile.csv'),'$ bloop -jf myfile.csv');

  t.end();
});

exports.run = function() {
  var args = process.argv.slice(3);

  var theirScript = args[0];
  if(!path.isAbsolute(theirScript)){
    theirScript = path.join(process.cwd(), theirScript);
  }

  var theirargs = [theirScript].concat(args.slice(1));

  //sayRunning(theirargs);
  var ps = cp.spawn(process.execPath, theirargs);
  ps.stdout.pipe(process.stdout);
  ps.stderr.pipe(process.stderr);
  
};

function sayRunning(args){
  console.log('running ' + chalk.magenta('node ' + args.join(' ')));
}

return exports;
})();
