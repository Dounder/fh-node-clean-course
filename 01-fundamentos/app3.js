const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const words = content.split(' ').length;
const reactWords = content.match(/React/gi).length;

console.log('Words: ', words);
console.log('React word count: ', reactWords);
