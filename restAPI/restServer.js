/**
 * 현재 데이터는 users에 저장 7~8장에서 데이터베이스 공부해야 저장 가능
 * request의 method에 따라 분기하였음
 * if문 지옥인거 같은데 처음 배우니까 일단 넘어가기로...
 *
 */
const http = require('http');
const fs = require('fs');

const users = {};

http
  .createServer((req, res) => {
    if (req.method === 'GET') {
      // request method가 GET이라면
      if (req.url === '/') {
        // request url이 /이라면
        return fs.readFile('./restAPI/restFront.html', (err, data) => {
          // restFront.html파일을 읽어와라
          if (err) {
            // err가 나면 err를 던져라
            throw err;
          }
          res.end(data); // end = 클라이언트에게 응답을 끝냈다는 신호 / data를 보내줌
        });
      } else if (req.url === '/about') {
        return fs.readFile('./restAPI/about.html', (err, data) => {
          if (err) {
            throw err;
          }
          return res.end(data);
        });
      } else if (req.url === '/users') {
        return res.end(JSON.stringify(users)); // request url 이 /users라면 users를 JSON으로 보내줌
      }
      // 그 이외의 url이 들어오면
      return fs.readFile(`./${req.url}`, (err, data) => {
        if (err) {
          res.writeHead(404, 'NOT FOUND'); // 404상태코드와 NOT FOUND상태 메세지를 보냄
          return res.end('NOT FOUND');
        }
        return res.end(data);
      });
    } else if (req.method === 'POST') {
      if (req.url === '/users') {
        let body = ''; // 클라이언트에서 보낸 데이터는 chunk(조각)으로 들어오기 때문에 빈 문자열 준비 이어 붙이기 위함
        // data이벤트 실행 body에 data 이어 붙이기
        req.on('data', (data) => {
          body += data;
        });
        // 이벤트를 끝내는 메서드 end
        return req.on('end', () => {
          console.log('POST 본문(BODY) : ', body);
          // JSON으로 받은 body parse진행 후 name 꺼내기
          const { name } = JSON.parse(body);
          const id = Date.now();
          users[id] = name; //users객체에 key = id, value = name 생성
          res.writeHead(201); // 201 상태코드
          res.end('등록 성공');
        });
      }
    } else if (req.method === 'PUT') {
      // request의 url의 시작이 /users/이라면
      if (req.url.startsWith('/users/')) {
        // request의 url에서 /를 기준으로 배열을 만들어 그 중 3번째를 가져옴
        // ex) http://localhost:8080/users/1744027386365
        // req.url = /users/1744027386365
        // split('/') = ["", "users", "1744027386365"]
        // [2] = "1744027386365"
        const key = req.url.split('/')[2];
        console.log(key);
        let body = '';
        req.on('data', (data) => {
          body += data;
        });
        return req.on('end', () => {
          console.log('PUT 본문(Body) : ', body);
          // users[key]에 있는 name 값을 body에 담겨있는 name으로 변경
          users[key] = JSON.parse(body).name;
          return res.end(JSON.stringify(users));
        });
      }
    } else if (req.method === 'DELETE') {
      if (req.url.startsWith('/users/')) {
        const key = req.url.split('/')[2];
        delete users[key];
        return res.end(JSON.stringify(users));
      }
    }
    // 이 모든 조건이 맞지 않으면 404상태코드와 NOT FOUND
    res.writeHead(404, 'NOT FOUND');
    return res.end('NOT FOUND');
  })
  .listen(8080, () => {
    console.log('8080번 포트에서 서버 대기중');
  });
