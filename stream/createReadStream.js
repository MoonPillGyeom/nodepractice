/**
 * createReadStream(파일 경로, 옵션(버퍼의 크기))
 * - 파일을 스트림으로 읽어온다.
 */

const fs = require('fs');

const readStream = fs.createReadStream('./stream/readme.txt', { highWaterMark: 16 });
const data = [];

readStream.on('data', (chunk) => {
  data.push(chunk);
  console.log('data : ', chunk, chunk.length);
});

readStream.on('end', () => {
  console.log('end : ', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
  console.log('error : ', err);
});
