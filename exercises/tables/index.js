var fs      = require('fs');
var _       = require('lodash');
var chalk   = require('chalk');
var path    = require('path');
var cp      = require('child_process');
var verify  = require('adventure-verify');

exports.problem = fs.readFileSync(__dirname + '/Readme.md', 'utf8');
exports.solution = fs.readFileSync(__dirname + '/solution.js', 'utf8');
exports.boilerplate = fs.readFileSync(__dirname + '/boilerplate.js', 'utf8');

var solutionPath = path.join(__dirname, 'solution.js');
var jsonPath = path.join(__dirname,'people.json');

exports.verify = verify({ modeReset: true}, function (args, t) {

  var theirScript = args[0];
  if(!path.isAbsolute(theirScript)){
    theirScript = path.join(process.cwd(), theirScript);
  }
  
  var theirargs = [theirScript, jsonPath];
  var myargs    = [solutionPath, jsonPath];

  var theirs    = cp.spawnSync(process.execPath, theirargs);
  var mine      = cp.spawnSync(process.execPath, myargs);

  var theirHead = theirs.stdout.toString().split('\n')[1];
  var myHead    = mine.stdout.toString().split('\n')[1];

  headings = [theirHead,myHead].map(function(head){
    return head.split('│').splice(1,3).map(function(heading){
      return heading.trim();
    });
  });

  var fatimaData = theirs.stdout.toString().split('\n')
    .reduce(function(result, cur){
      if(cur.indexOf('Fatima') !== -1){
        return cur.split('│').splice(1,3).map(function(v){return v.trim();});
      }else{
        return result;
      }
    },[]);

  //headings
  t.deepEqual(headings[0], headings[1], 'headings are correct');

  //wide enough for long names
  t.equal(fatimaData[0], 'Fatima Zahra Ndiaye', 'names are not cut off');
  
  //children totals
  var fatimaKidCount = parseInt(fatimaData[2]);
  t.equal(fatimaKidCount, 4, 'correct children count (for Fatima)');
  
  t.end();
});

exports.run = function() {
  var args = process.argv.slice(3);

  var theirScript = args[0];
  if(!path.isAbsolute(theirScript)){
    theirScript = path.join(process.cwd(), theirScript);
  }

  var theirargs = [theirScript, jsonPath];

  var theirs    = cp.spawnSync(process.execPath, theirargs);
  console.log(theirs.stdout.toString());
  
}
