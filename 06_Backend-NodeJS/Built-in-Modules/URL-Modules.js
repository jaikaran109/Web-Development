import url from 'node:url';

const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
myURL.username = 'jaikaran109';

console.log(myURL);
console.log(myURL.href);
