var exercise     = require('workshopper-exercise/basic');
var ipsum        = require('lorem-ipsum');
var util         = require('util');
var _            = require('lodash');

exercise.addSetup(function(mode, next){
  var word = ipsum({ count:1, units:'words' });

  //three ways of sending --word={word}
  var argVariants = [
    [util.format('--word=%s',word)],
    [util.format('--word="%s"',word)],
    ['--word',word]
  ];

  //pick one
  //@todo make it run 3 times & test on each
  var args = _.sample(argVariants);

  this.submissionArgs = this.solutionArgs = args;
  process.nextTick(next);
});

module.exports = exercise;
