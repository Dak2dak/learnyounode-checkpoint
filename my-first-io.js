const fs = require('fs');
const buf = fs.readFileSync(process.argv[2]).toString().split('\n').length - 1;
console.log(buf)

