Tables can be useful. Let's learn to make them! There's a library called
`cli-table` that makes this pretty easy, so that's what we'll use.

----

# Task

Read a json file with a collection of users & some info about them & output a
table with one row per user. Each person looks like this:
```json
  { "name":"Sequoia", "color":"red", "children": ["Joe", "Moe", "North"] }
```

The table should use the headings "Name", "Favorite Color", and "Children"
(the number of children). Cells should be wide enough that words aren't cut off.

```
$ clijs run yourscript.js
┌─────────────────────────┬──────────────────┬──────────┐
│ Name                    │ Favorite Color   │ Children │
├─────────────────────────┼──────────────────┼──────────┤
│ Sequoia                 │ red              │ 3        │
└─────────────────────────┴──────────────────┴──────────┘
```

## Example
```javascript
var table = new Table({
  head: ['Name', 'Rank', 'Serial Number',
  colWidths: [30, 22, 10]
});

table.push(['Sanders', 'Colonel', '8239275']);

console.log(table.toString());
```

## Hints

* `clijs run` will supply the name of the `json` file with the user data as the 
first argument
* add one row **forEach** person
* `npm install cli-table`

## Resources

* https://www.npmjs.com/package/cli-table
* http://devdocs.io/javascript/global_objects/array/foreach
