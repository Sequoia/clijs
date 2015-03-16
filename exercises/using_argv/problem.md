Welcome to the CLIJS workshopper! In this set of lessons we'll take a look at
some of the tools in the node ecosystem that make it easy and fun to build
shell tools in javascript. Before we jump into that, however, let's spend a
moment working without such tools so we can understand why they are useful.

# BACKGROUND
You're job is to write a program that will accept a word via the command line
**switch** and print it. The only problem is we don't know which format the user
will use to pass the `--word`! It might be passed any of the following ways:

```sh
$ node yoursolution.js --word=foo
$ node yoursolution.js --word foo
$ node yoursolution.js --word="foo"
```

# CHALLENGE
Write a script that accepts a `--word` & prints it out using `console.log`

# HINTS
* Put `console.log(process.argv)` in your script and try `clijs run yours.js` a few times to see what's coming thru
* The word is randomly generated-- it won't be the same each time :)

#RESOURCES
* https://nodejs.org/api/process.html#process_process_argv
