/**
 * 이벤트를 연결할 때는 on 메서드를 사용하고, 이벤트를 연결 해제할 때는 off 메서드를 사용
 * on(이벤트명, 콜백): 이벤트 이름과 이벤트 발생 시의 콜백을 연결
 * addListener(이벤트명, 콜백): on과 기능이 동일
 * emit(이벤트명): 이벤트를 호출하는 메서드
 * once(이벤트명, 콜백): 한 번만 실행되는 이벤트를 연결
 * removeAllListeners(이벤트명): 이벤트에 연결된 모든 이벤트 리스너를 제거
 * removeListener(이벤트명, 리스너): 이벤트에 연결된 리스너를 하나씩 제거
 * off(이벤트명, 콜백): 노드 10 버전에서 추가된 메서드로, removeListener와 기능이 동일
 * listenerCount(이벤트명): 현재 리스너가 몇 개 연결되어 있는지 확인
 */

const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
  console.log('이벤트 1');
});
myEvent.on('event2', () => {
  console.log('이벤트 2');
});
myEvent.on('event2', () => {
  console.log('이벤트 2 추가');
});

myEvent.emit('event1');
myEvent.emit('event2');

myEvent.once('event3', () => {
  console.log('이벤트 3');
})
myEvent.emit('event3');
myEvent.emit('event3');

myEvent.on('event4', () => {
  console.log('이벤트 4');
})
myEvent.removeAllListeners('event4');
myEvent.emit('event4');

const listener = () => {
  console.log('이벤트 5');
}
myEvent.on('event5', listener);
myEvent.removeListener('event5', listener);
myEvent.emit('event5');

console.log(myEvent.listenerCount('event2'));