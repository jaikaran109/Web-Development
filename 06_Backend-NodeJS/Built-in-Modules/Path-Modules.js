// https://nodejs.org/docs/latest/api/path.html#pathdirnamepath

const { log } = require('console');
const path = require('path');

let a = path.basename('/home/user/dir/file.txt');
console.log(a);  // give base name

// 
a = path.dirname('/home/user/dir/file.txt');
console.log(a); // directory name 
