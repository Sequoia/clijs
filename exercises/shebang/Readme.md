Shebang!

"WTF?" Yeah, I know. The Unix **Shebang** is as awkwardly-named as it is
useful. If you don't like calling it that, here's 3 more commonly-used terms of
endearment: hashbang, pound-bang, hash-pling! Heck, it's a free country, you can
call it whatever you want. Anyway, let's get your perverse eyes on one and see
wtf it does.

Below is a file named `shiba`. Look at that wacky `#!` on the first line. That's
a Shebang.

```js
#!/usr/bin/env node
console.log('I see you lookin'');
```

Until now, we've been using the `node` **executable** to run our scripts. That's
great and everything, but wouldn't it be nice if we could create our own
executable? This way we could have a nice, short, easy-to-type program name and
hang out amongst other great executables like `ls`, `cd`, `mv`, `node`, etc. All
it takes is a file and setting the executable **permission** on it. Then we have
our very own executable.

Let's set the executable permission on our file!

```sh
$ chmod +x shiba
```

Now we can execute it

```sh
$ ./shiba
I see you lookin'
```

Great, but how did our computer know it was a node program? Enter: the Shebang.
When a program with a shebang is run, the loader uses the path specified in the
shebang as the interpreter to run your script. In this case, we used
`#!/usr/bin/env node` which points to the installed `node` executable on your
system.

-----

# Task

Use a shebang to create a program that allows us to execute the program without
having to call `node`.

## Example

```js
#!/usr/bin/env node
console.log('this is basically the answer');
```

## Hints

* read?

## Resources

* this readme
* wikipedia
