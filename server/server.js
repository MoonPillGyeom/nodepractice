/**
 * http 모듈로 서버 만들기
 * 리눅스와 맥에서는 1024번 이하 포트에 연결할 때 관리자 권한이 필요하다.
 */

const http = require('http');

// http
//   .createServer((req, res) => {
//     res.write('<h1>Hello Node!</h1>');
//     res.end('<p>Hello Server!</p>');
//   })
//   .listen(8080, () => {
//     console.log('8080번 포트에서 서버 대기 중입니다!');
//   });

const server = http.createServer((req, res) => {
  res.write('<h1>Hello Node! moon</h1>');
  res.end('<p>Hello Server!</p>');
});

server.listen(8080);

server.on('listening', () => {
  console.log('8080번 포트에서 서버 대기 중입니다!');
});

server.on('error', (error) => {
  console.error(error);
});
