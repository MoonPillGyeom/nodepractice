const string = 'ㄱㄷㄴ';
const number = 1;
const boolean = true;
const object = {
  outside: {
    inside: {
      key: 'value',
    },
  },
};

console.time('전체 시간'); // time과 timeEnd 사이의 시간을 측정
console.log('평범한 로그입니다. 쉼표로 구분해 여러 값을 찍을 수 있습니다.'); // 콘솔에 출력
console.log(string, number, boolean);
console.error('에러 메시지는 console.error에 담아주세요'); // 에러를 콘솔에 출력

console.dir(object, { colors: false, depth: 2 }); // 객체를 콘솔에 표시할 때 사용
console.dir(object, { colors: true, depth: 1 });

console.time('시간 측정');
for (let i = 0; i < 100000; i++) {
  continue;
}
console.timeEnd('시간 측정');

function b() {
  console.trace('에러 위치 추적'); // 에러 위치 추적
}

function a() {
  b();
}

a();

console.timeEnd('전체 시간');
