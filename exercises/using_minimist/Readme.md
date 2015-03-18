In that last exercise you handled three ways of passing values via switches, but
that didn't even include all variations (e.g. single quotes: `--word='foo'`). I
know what you're thinking: "There's Got To Be A Better Way!" Well There Is!

There are several libraries that make it easier to parse command line switches
and arguments, **minimist** is a popular one and we'll be using it for this
exercise. Be sure to refer to the minimist docs!!

----

# Task

Repeat the last exercise, this time using minimist. The same switches will be
passed (`--word=foo`, `--word="foo"`, `--word foo`) during 3 separate calls to
your script, as before.

## Conditions

* Use minimist

## Hints

* `npm install minimist` in your exercise directory

## Resources

* https://github.com/substack/minimist
