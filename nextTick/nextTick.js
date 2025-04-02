/**
 * nextTick의 콜백함수는 setImmediate나 setTimeout보다 먼저 실행된다.
 * resolve된 Promise도 nextTick처럼 다른 콜백들보다 먼저 실행된다.
 * 그래서 process.nextTice과 Promise를 마이크로태스크(microtask)라고 부른다.
 */
setImmediate(() => {
  console.log('setImmediate');
});

process.nextTick(() => {
  console.log('nextTick');
});

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(() => console.log('Promise'));
