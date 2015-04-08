So far our CLI programs have taken a small number or command line arguments. But
what if our program needed to accept a much larger input? We could use one
argument that represents a filename to open a file and read it, but that doesn't
afford us the greatest amount of flexibility. Not to mention, it's a lot of work
and responsibility!

Attempting to access the file system can be a big no-no, and in some cases, your
program might not have sufficient permissions to access the specified file.
However, it's possible to feed information into a program's standard input (or
**stdin**) using a mechanism called **piping**. The primary benefit of using
this kind of input is that we don't have to lookup files or attempt to read them
on our own. The command line supports piping via the `|` symbol and we'd like to
take advantage of that.

In this exercise, an excerpt of Shakespeare will be piped to your program's
stdin. Your job is to write a program that will read text from the piped input
and only output lines that containing the word specified by the `--word`
argument. (Use a case insensitive string match)

----

# Task

Write a script that accepts a piped input & print only lines containing the
value specified by the `--word` argument

## Example

```sh
$ cat macbeth.txt | node yoursolution.js --word=thou
```

## Working with buffers

In node.js, piped data is usually transported in [Buffer][Buffer] objects.
Buffers provided convenience for a wide variety of uses, but in this lesson,
we'll only concern ourselves with converting them to usable Strings.

When reading from `process.stdin` you'll get a buffer object. To gain access to
the normal `String` methods, we'll first have to convert it to a string.

```js
// it's as simple as
var str = myBuffer.toString()
```

## How to search for string inside another string

In JavaScript, you can search for String within another String using the
[indexOf][indexOf] method. `indexOf` will find the first occurrence of the
string your searching for starting with `0`. If no match is found, a `-1` is
returned.

```js
var str = "abcdefghi";
str.indexOf("a");   // 0
str.indexOf("b");   // 1
str.indexOf("def"); // 3
str.indexOf("z");   // -1
```

You can do a **case-insensitive** search by converting each string to the same
case before doing your search.

```js
// "world" is not found in the uppercase string
var str = "HELLO WORLD";
str.indexOf("world"); // -1

// this time, let's try a converting to lowercase first
var str = "HELLO WORLD";
str = str.toLowerCase();
str.indexOf("world"); // 6
```

## How to split lines

Multi-line input may seem like chore to work with, but it doesn't have to be!
Luckily, it's really easy to break a string apart and work on each line
individually.

The String [split][split] method will split a string based on a specified
separator. The resulting value will be an `Array` containing the separate string
parts.

```js
var str = "dat-cat-tho";
str.split("-"); // ["dat", "cat", "tho"]
```

To do this with a multi-line string, all we have to do is splint the string
using the newline character `\n` as the separator.

```js
var lines = multilineString.split("\n"); // [line1, line2, line3]
```

## Hints

* Use `minimist` to easily get the named argument `--word`
* You can install minimist using `$ npm install minimist`
* `clijs run` will automatically pipe text into your program's stdin
* Remember to match (e.g.,) `Thou` and `thou` (case insensitive)
* You can access stdin via `process.stdin`
* You can convert a Buffer to a String using `buffer.toString()`

## Resources

* https://nodejs.org/api/buffer.html#buffer_buf_tostring_encoding_start_end
* https://nodejs.org/api/process.html#process_process_stdin

[Buffer]: https://nodejs.org/api/buffer.html
[indexOf]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
[split]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
