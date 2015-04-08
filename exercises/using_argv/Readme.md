Welcome to the CLIJS workshopper! In this set of lessons we'll take a look at
some of the tools in the node ecosystem that make it easy and fun to build
shell tools in javascript. Before we jump into that, however, let's spend a
moment working without such tools so we can understand why they are useful.

You're job is to write a program that will accept a word via the command line
**switch** and print it. The switch is `--word`.

----

# Task

Write a script that accepts a `--word` & prints it out using `console.log`

## Example

```sh
$ node yoursolution.js --word=foo
```

## Hints

* Put `console.log(process.argv)` in your script and try `clijs run yours.js`
to see what's coming thru
* Remember that the first two arguments (in `process.argv`) are 
**node** and **yourscript.js**.
* The word is randomly generated-- it won't be the same each time :)
* Run `clijs verify [yourscript.js]` to test your solution!

## Resources
* https://nodejs.org/api/process.html#process_process_argv
