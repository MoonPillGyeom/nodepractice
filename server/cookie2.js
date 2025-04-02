/**
 * 'set-cookie': `name=${encodeURIComponent(name)};Expires=${expires.toGMTString()}; HttpOnly; path=/`,
 * 쿠키명=쿠키값;Expires=날짜(만료값);
 * HttpOnly : 설정시 자바스크립트로 접근X
 * Domain=도메인명 : 쿠키가 전송될 도메인 특정 기본값은 현재 도메인
 * Path=URL : 쿠키가 전송될 URL 특정 기본값은 '/'이고 이 경우 모든 URL에서 쿠키 전송 가능
 * Secure : HTTPS일 경우에만 쿠키 전송
 * Max-age=초 : Expires랑 비슷하지만 날짜 대신 초 입력 가능
 */

const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') => {
  // console.log(cookie);
  return cookie
    .split(';')
    .map((v) => v.split('='))
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});
};

// ex) req.url = /login?name=pill
http
  .createServer((req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    // req.url의 첫 시작이 /login 인지 여부 boolean
    if (req.url.startsWith('/login')) {
      const { query } = url.parse(req.url); // query값 가져오기 name=pill
      const { name } = qs.parse(query); // query값 변환 name=pill -> {name: 'pill'}
      const expires = new Date(); // 현재 날짜
      expires.setMinutes(expires.getMinutes() + 5); // 현재 시간 기준 + 5분

      // HTTP 응답의 상태코드와 헤더 설정
      res.writeHead(302, {
        location: '/', // 302상태코드와 location: '/' 으로 리디렉션
        'set-cookie': `name=${encodeURIComponent(name)};Expires=${expires.toGMTString()}; HttpOnly; path=/`,
      });
      res.end(); // response 종료
    } else if (cookies.name) {
      // HTTP 응답의 상태코드와 헤더 설정
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`<p>${cookies.name}님 안녕하세요</p>`); // res 종료
    } else {
      // 쿠키가 없으면 해당 경로 파일 보여줌
      fs.readFile('./server/cookie.html', (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
    }
  })
  .listen(8080, () => {
    console.log('8080번 포트에서 대기 중');
  });
