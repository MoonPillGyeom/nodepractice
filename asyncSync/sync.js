/**
 * 동기적으로 파일을 읽어오는 방법
 */

const fs = require('fs');

console.log('start');
let data = fs.readFileSync('./asyncSync/readme.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./asyncSync/readme.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./asyncSync/readme.txt');
console.log('3번', data.toString());
console.log('end');