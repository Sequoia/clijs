'use strict';

var fs           = require('fs');
var path         = require('path');
var chalk        = require('chalk');
var cp           = require('child_process');
var verify       = require('adventure-verify');

exports.problem     = fs.readFileSync(path.join(__dirname, 'Readme.md'), 'utf8');
exports.solution    = fs.readFileSync(path.join(__dirname, 'solution.js'), 'utf8');
exports.boilerplate = fs.readFileSync(path.join(__dirname, 'boilerplate.js'), 'utf8');

function setup(args) {
  var exerciseRoot = path.dirname(path.join(process.cwd(), args[0]));
  var learnerScript = path.join(exerciseRoot, 'index.js');
  var learnerExecutable = path.join(exerciseRoot, 'index');

  // remove learner script
  if (fs.existsSync(learnerScript)) {
    console.info(
      chalk.yellow('removing %s'),
      path.relative(process.cwd(), learnerScript)
    );
    fs.unlink(learnerScript);
  }

  // create learner executable
  // copy contents of boilerplate.js
  if (!fs.existsSync(learnerExecutable)) {
    console.info(
      chalk.yellow('creating %s with mode 0755'),
      path.relative(process.cwd(), learnerExecutable)
    );
    fs.writeFileSync(learnerExecutable, exports.boilerplate, {
      mode: 493, // 0755
      flag: 'w', // write from seek 0
    });
  }

  // someone/thing fucked up, learner executable no longer has +x
  try {
    fs.accessSync(learnerExecutable, fs.X_OK)
  }
  catch (err) {
    if (err.code !== 'EACCES') throw err;
    console.info(
      chalk.yellow('setting +x on to %s'),
      path.relative(process.cwd(), learnerExecutable)
    );
    fs.chmodSync(learnerExecutable, 493);
  }
}

exports.verify = verify({ modeReset: true }, function (args, t) {
  setup(args);
  // ...
  t.end();
});

exports.run = function(args) {
  setup(args);
  console.info(chalk.yellow('running: %s %s'), process.execPath, args.join(' '));
  // ...
};
