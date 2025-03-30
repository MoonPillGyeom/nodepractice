/**
 * process.exit()는 노드 프로세스를 멈추는 메서드다.
 * 서버 환경에서는 서버를 멈추는 것이므로 서버에는 사용하지 않는다.
 * process.exit()메서드에는 인자로 코드 번호를 줄 수 있는데, 인자를 주지 않거나 0이면 정상 종료를 뜻하고, 1을 주면 비정상 종료를 뜻한다.
 */

let i = 10;
setInterval(() => {
  for (let j = 0; j < 1000000; j++) {
    if (j > i) {
      console.log('종료');
      process.exit();
    }
    console.log(j);
  }
}, 1000)