const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
if (cluster.isMaster) {
  console.log(`마스터 프로세스 아이디: ${process.pid}`);
  // CPU 개수만큼 워커를 생산
  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork();
  }
  cluster.on('exit', (worker) => {
    console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
  });
} else {
  http
    .createServer((req, res) => {
      res.write(`<h1>Hello Node!!</h1>`);
      res.end('<p>Hello cluster</p>');
      setTimeout(() => {
        process.exit(1);
      }, 1500);
    })
    .listen(8085);
  console.log(`${process.pid}번 워커 실행`);
}
