/**
 * fs.access(경로, 옵션, 콜백): 폴더나 파일에 접근할 수 있는지 체크
 * access 메서드는 두 번째 인자로 상수들을 넣었는데, F_OK는 파일 존재 여부, R_OK는 읽기 권한 여부, W_OK는 쓰기 권한 여부를 체크
 * 파일/폴더나 권한이 없다면 에러가 발생하는데, 파일/폴더가 없을 때의 에러 코드는 ENOENT이다.
 *
 * fs.mkdir(경로, 콜백): 폴더를 만드는 메서드
 * fs.mkdir은 이미 폴더가 있다면 에러가 발생하므로 먼저 access 메서드를 호출해서 확인하는 것이 중요
 *
 * fs.open(경로, 옵션, 콜백): 파일의 아이디(fd 변수)를 가져오는 메서드
 * 옵션으로는 w(쓰기), r(읽기), a(기존 파일에 추가)가 있다.
 *
 * fs.rename(기존 경로, 새 경로, 콜백): 파일의 이름을 바꾸는 메서드
 */

const fs = require('fs');

fs.access('./folder', fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.log('폴더 없음');
      fs.mkdir('./folder', (err) => {
        if (err) {
          throw err;
        }
        console.log('폴더 만들기 성공');
        fs.open('./folder/file.js', 'w', (err, fd) => {
          if (err) {
            throw err;
          }
          console.log('빈 파일 만들기 성공', fd);
          fs.rename('./folder/file.js', './folder/newfile.js', (err) => {
            if (err) {
              throw err;
            }
            console.log('이름 바꾸기 성공');
          });
        });
      });
    } else {
      throw err;
    }
  } else {
    console.log('이미 폴더 있음');
  }
});
