That wasn't so bad! Let's try something a little more complex with argv...

In this exercise the script should act the same, but the input will be a little
less uniform (just like in The Real World). `word` will be passed in the following ways:

```sh
$ node yoursolution.js --word foo
$ node yoursolution.js [other switches] --word=foo [other switches]
$ node yoursolution.js --word=foo
```

----

# Task

Write a script that accepts a `--word` & prints it out using `console.log`

## Hints

* Use the script from your last exercise as a starting point
* Look at docs on `String.match` or `Regexp.test`

## Resources

* https://nodejs.org/api/process.html#process_process_argv
* http://devdocs.io/javascript/global_objects/string/match
* http://devdocs.io/javascript/global_objects/regexp/test
