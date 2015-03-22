In that last exercise you handled passing values via switches. That was one
switch passing one string. Imagine if you were writing a tool that had a four or 
five or a dozen different switches, along with flags, combined short switches
(`-ab` for `-a -b`), and of course aliases... You can see how this quickly becomes
a complex task. I know what you're thinking: "There's Got To Be A Better Way!"

Well There Is!

There are several libraries that make it easier to parse command line switches
and arguments, **minimist** is a popular one and we'll be using it for this
exercise. Be sure to refer to the minimist docs!!

----

# Task
$ node yoursolution.js 

Repeat the last exercise, this time using minimist. The same switches will be
passed (`--word=foo`, `[other switches] --word=foo [other switches]`, `--word foo`)
during 3 separate calls to your script, as before.

## Conditions

* Use minimist

## Hints

* If you run using `clijs run [yours.js]`, `minimist` will be available in that
  context and switches will be passed to it automatically
* If you want to call your script directly (`node [yours.js] --word hello`), you'll
need to `npm install minimist` in your exercise directory
* If you get a message like `Error: Cannot find module 'chalk'`, see previous hint

## Resources

* minimist docs: https://github.com/substack/minimist
