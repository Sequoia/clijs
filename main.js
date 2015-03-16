#!/usr/bin/env node

const workshopper = require('workshopper');

workshopper({
  name        : require('./package.json').name,
  appDir      : __dirname,
	//@todo add some "help" info (see learnyounode for example)
  languages   : ['en'],
});
