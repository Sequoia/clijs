So far we've worked primarily with the **input** for shell tools, let's shift
gears & work on **output** for a bit.

When printing text, terminals look for commands (called "escape codes") in the
text, which tell them how to style the text. For example, to print the string
" hello " in red, you would first send the code for red, `\x1b[31m`, then
" hello ", and finally `\x1b[39;49m` to set colors back to default.
Try it in your (POSIX) terminal:

```sh
echo '\x1b[31m hello \x1b[39;49m (default color here)'
```

This time we'll skip the hand-rolled solution-- the NPM registry is full of
command-line color utilities & we'll be using `chalk` to simplify color output.

----

# Task

Write a script that reads a json file containing an array of message objects,
uses `chalk` to style the messages, and `console.log` to print them. The message
objects will have a `type` property (`error`, `info`, or `warning`) and a `message`
property.  Use the following styles:

* write `error` messages in **bold text** with a **red background**
* write `info` messages in **blue text**
* write `warning` messages **yellow text** and **underline** them

The path to the json file will be passed as the first argument. If the optional
second argument, `--type [type]` is passed, print only messages of that type

## Example

```js
$ node yourscript.js /var/log/clijs/remote_log_output.json
$ node yourscript.js /absolute/path/to/messages.json --type error
```
The first prints all messages, the second prints only error messages.

## Conditions

* Use chalk

## Hints

* Running `clijs run [yours.js]` this time sets up the environment & passes a filename but
  **not any switches!** Use `clijs run yours.js --type=info` to test your
  switches, or just call directly with node
* If you call your script directly makes sure to npm install `chalk` & `minimist`
* Use the absolute path to the `json` file to avoid "Error: Cannot find module 'messages.json'"
* Check out the "Easily define your own themes." section in the `chalk` docs

## Resources

* Chalk: https://www.npmjs.com/package/chalk
* Minimist: https://www.npmjs.com/package/minimist
* More on ANSI codes & terminal colors: http://en.wikipedia.org/wiki/ANSI_escape_code#Colors
