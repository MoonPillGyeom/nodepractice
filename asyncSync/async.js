/**
 * 비동기 방식
 *
 */

const fs = require('fs');

console.log('start');
fs.readFile('./asyncSync/readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('1번', data.toString());
});

fs.readFile('./asyncSync/readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('2번', data.toString());
});

fs.readFile('./asyncSync/readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('3번', data.toString());
});

console.log('end');
