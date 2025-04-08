/**
 * https 모듈과 차이
 * createServer -> createSecureServer
 */

const http2 = require('http2');
const fs = require('fs');

http2
  .createSecureServer(
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
  .listeners(443, () => {
    console.log('443포트에서 대기 중!');
  });
