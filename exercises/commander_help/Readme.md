Documentation is important! Commander makes it easy to document your switches &
provide usage examples for your tool so the user can use `--help` or `-h` to
find out what your tool does & how to use it.

----

# Task

Write a script that outputs *help info* on `--help` and a *version number* on
`--version`. The version should be `1.2.3`, the help output should look like
this:
```
  Usage: solution [options]

  Options:

    -h, --help         output usage information
    -V, --version      output the version number
    -t, --table        output in table format (default)
    -j, --json         output json
    -f, --file <name>  input file path

Examples:
  Output in file in default format
  $ bloop --file=myfile.csv
  Output in file in json (short switches)
  $ bloop -jf myfile.csvinfo 
```

## Hints

* See `Custom Help` docs & note where `parse` must be called
* Make sure the Examples section looks just as it does above

## Resources

* https://www.npmjs.com/package/commander#custom-help
