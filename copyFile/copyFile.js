/**
 * fs.copyFile(src, dest, callback)
 * src: 복사할 파일의 경로
 * dest: 복사될 파일의 경로
 * node 8.5v 이상에서만 사용 가능
 */

const fs = require('fs');

fs.copyFile('./note.txt', './copyFile/writeme.txt', (error) => {
  if (error) {
    return console.error(error);
  }
  console.log('복사 완료');
});