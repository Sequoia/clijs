Well wasn't that easy? We'll linger a bit on minimist in this exercise & try a
something slightly more involved.

In this exercise you'll be writing a script that **multiplies** or **divides**
two integers, depending on the user's preference.

----

# Task

Write a script that multiplies or divides two integers & prints the solution to
the screen using `console.log`. The following switches should be supported:
-m, --multiply			multiply the two numbers
-d, --divide        divide the two numbers
-a, --first=NUM     first number in the operation  (numerator,multiplier)
-b, --second=NUM    second number in the operation (denominator,multiplicand)

## Example

`node yourscript.js --multiply -a2 -b3`         should output `6`
`node yourscript.js --d --first 10 --second=5`  should output `2` 

## Hints

* Don't treat `-m` & `--multiply` as different args-- use aliases! (Read The
  Friendly Manual)
* We'll assume users will **not** pass both `--multiply` & `--divide` at once

## Resources

* https://github.com/substack/minimist
