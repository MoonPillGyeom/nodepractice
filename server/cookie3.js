/**
 * session 간단 예제
 * 실 배포 서버에서는 세션을 변수에 저장하지 않음
 * 서버가 멈추거나 재시작되면 메모리에 저장된 변수가 초기화됨
 * 보통 데이터 베이스에 넣어둠
 * 간단 예제이며, 실제론 이와같이 코드를 짜지 않음
 */

const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map((v) => v.split('='))
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

const session = {};

http
  .createServer((req, res) => {
    const cookies = parseCookies(req.headers.cookie);

    if (req.url.startsWith('/login')) {
      const { query } = url.parse(req.url);
      const { name } = qs.parse(query);
      const expires = new Date();
      expires.setMinutes(expires.getMinutes() + 5);
      const randomInt = Date.now(); // 1970 1월 1일 00:00:00을 기준으로 오늘 날짜까지의 밀리초를 반환
      // session객체에 randomInt을 키로해서 name, expires를저장
      session[randomInt] = {
        name,
        expires,
      };
      console.log(session[randomInt]);
      res.writeHead(302, {
        Location: '/',
        'set-cookie': `session=${randomInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
      });
      res.end();
    } else if (cookies.session && session[cookies.session].expires && session[cookies.session].expires > new Date()) {
      console.log(cookies);
      console.log(cookies.session);
      console.log(session[cookies.session].expires);
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`${session[cookies.session].name}님 안녕하세요`);
    } else {
      fs.readFile('./server/cookie.html', (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
    }
  })
  .listen(8080, () => {
    console.log('8080 gogo');
  });
