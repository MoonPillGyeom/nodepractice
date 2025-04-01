/**
 * 파일을 읽어오는 방법
 */

const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'readme.txt');
console.log('filepath : ',filepath);
// fs.readFile(filepath, (err, data) => {


  fs.readFile('./read/readme.txt', (err, data) => {
if (err) {
throw err;
}
console.log(data);
console.log(data.toString());
})