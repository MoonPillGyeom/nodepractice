const { URL } = require('url');

const myURL = new URL('http://www.gitbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('searchParams:', myURL.searchParams); // search 부분을 searchParams 객체로 가져옴
console.log('searchParams.getAll():', myURL.searchParams.getAll('category')); // 키에 해당하는 모든 값들을 가져옴 ['nodejs', 'javascript'] 베열형식
console.log('searchParams.get():', myURL.searchParams.get('limit')); // 키에 해당하는 첫 번째 값만 가져옴
console.log('searchParams.has():', myURL.searchParams.has('page')); // 해당 키가 있는지 없는지를 검사함 boolean

console.log('searchParams.keys():', myURL.searchParams.keys()); // searchParams의 모든 키를 반복기 객체로 가져옴
console.log('searchParams.values():', myURL.searchParams.values()); // searchParams의 모든 값을 반복기 객체로 가져옴

myURL.searchParams.append('filter', 'es3'); // 해당 키를 추가
myURL.searchParams.append('filter', 'es5');
console.log(myURL.searchParams.getAll('filter')); // ['es3', 'es5']

myURL.searchParams.set('filter', 'es6'); // 같은 키에 다른 값을 대입하면 기존 값은 지우고 새로운 값으로 대체
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter'); // 해당 키를 제거
console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.toString():', myURL.searchParams.toString()); // 조작한 searchParams 객체를 다시 문자열로 만듦
myURL.search = myURL.searchParams.toString();
