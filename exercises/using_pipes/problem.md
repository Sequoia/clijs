So far our CLI programs have taken a small number or command line arguments. But
what if our program needed to accept a much larger input? We could use one
argument that represents a filename to open a file and read it, but that's a lot
of work and responsibility! The command line supports **piping** via `|` and
we'd like to take advantage of that.

In this exercise, an excerpt of Shakespeare will be piped to your program's
standard input (or **stdin**). Your job is to write a program that will read
text from the piped input and only output lines that contain the word `thou`
(case insensitive).

----

# Task

Write a script that accepts a piped input & print only lines containing `thou`

## Example

```sh
$ cat macbeth.txt | node yoursolution.js
```

## Hints

* Remember to match `Thou` and `thou` (case insensitive)
* You can access stdin via `process.stdin`

## Resources
* https://nodejs.org/api/process.html#process_process_stdin
