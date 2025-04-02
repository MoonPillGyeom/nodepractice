/**
 * form(문자열) : 문자열을 버퍼로 바꿀 수 있음
 * length : 버퍼의 크기를 알 수 있음
 * toString(버퍼) : 버퍼를 다시 문자열로 바꿀 수 있음
 * concat(배열) : 배열 안에 든 버퍼들을 하나로 합칠 수 있음
 * alloc(바이트) : 빈 버퍼를 생성할 수 있음
 */

// const buffer = require('buffer');
const buffer = Buffer.from('저를 버퍼로 바꿔보세요');

console.log('from() : ', buffer);
console.log('length : ', buffer.length);
console.log('toString() :', buffer.toString());

const array = [Buffer.from('띄엄'), Buffer.from('띄엄'), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array);
console.log('concat() : ', buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log('alloc() : ', buffer3);
