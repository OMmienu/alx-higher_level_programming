#!/usr/bin/node

// Write a script that reads and prints the content of a file.

const f = require('fs');
const filenamme = process.argv[2];

f.readFile(filename, 'utf-8', function (err, data) {
  if (err) console.error(err);
  else console.log(data);
});
