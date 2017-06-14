'use strict';

const fp = require('./lib/fp.js');

let result = fp.map(process.argv[2], n=> n.toUpperCase());
console.log(result);
