/**
 * 파일에 내용을 쓰는 방법
 */

const fs = require('fs');

fs.writeFile('./writeFile/writeme.txt', '글이 입력됩니다.', (err) => {
  if (err) {
    throw err;
  }
  fs.readFile('./writeme.txt', (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data.toString());
  });
});
