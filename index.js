#!/usr/bin/env node

var path = require('path');
var adventureMap = require('adventure-map');
var pkg = require('./package.json');
var exercises = require('./exercises/menu.json');

// resolve all package.json exercises relative
// to this directory.
Object.keys(exercises).forEach(function(name) {
  exercises[name] = path.resolve(__dirname, exercises[name]);
});

pkg.exercises = exercises;
var adventure = adventureMap(pkg);

// auto-execute if run from commandline
if (!module.parent) adventure.execute(process.argv.slice(2));

// export for manual execution
module.exports = adventure;
