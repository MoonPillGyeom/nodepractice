/**
 * http와 다른점 : createServer메서드가 인자를 두 개 받음
 * createServer(인증서에 관련된 옵션 객체, 서버 로직)
 * 인증서를 구입하면 pem이나 crt 또는 Key 확장자를 가진 파일들을 제공해줌.
 */

const https = require('https');
const fs = require('fs');

https
  .createServer(
    {
      cert: fs.readFileSync('도메인 인증서 경로'),
      key: fs.readFileSync('도메인 비밀키 경로'),
      ca: [fs.readFileSync('상위 인증서 경로'), fs.readFileSync('상위 인증서 경로')],
    },
    (req, res) => {
      res.write('<h1>Hello Node!</h1>');
      res.end('<p>Hello Server!</p>');
    }
  )
  .listen(443, () => {
    console.log('443포트 대기 중!');
  });
