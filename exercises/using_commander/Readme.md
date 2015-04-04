So far we've looked at parsing arguments **by hand** and using the **minimist** library.
For simple scripts this is plenty, but what about programs with many commands (like
`git`), usage examples, help text, etc.? For complex programs like this, a framework
with more features is helpful, and `commander.js` is just that framework! Let's get
familiar with `commander.js` by recreating a solution from **More Minimist**.

----

# Task

Write a script that multiplies or divides two integers & prints the solution to
the screen using `console.log`. The following switches should be supported:
-m, --multiply			multiply the two numbers
-d, --divide        divide the two numbers
-a, --first=NUM     first number in the operation  (numerator,multiplier)
-b, --second=NUM    second number in the operation (denominator,multiplicand)

## Example

```javascript
var program = require('commander');
program
  .option('-u, --user <name>', 'name of user')
  .parse(process.argv);
if (program.user) console.log('name given: ' + program.user);
```

## Hints

* `npm install commander`
* Usage string is optional, not required (we'll go over that stuff next exercise)
* Adapt your solution from **More Minimist**
* Commander.js has great docs: refer to them!!

## Resources

* https://www.npmjs.com/package/commander
