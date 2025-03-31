const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep); // 경로의 구분자
console.log('path.delimiter:', path.delimiter); // 환경 변수의 구분자
console.log('---------------------------------');
console.log('path.dirname():', path.dirname(string));
console.log('path.extname():', path.extname(string));
console.log('path.basename():', path.basename(string));
console.log('path.basename - extname:', path.basename(string, path.extname(string)));
console.log('---------------------------------');
console.log('path.parse()', path.parse(string));
console.log('path.format():', path.format({
  dir: '/Users/pillgyeom/Desktop/nodepractice',
  name: 'path',
  ext: '.js',
})); // path.parse()한 객체를 파일 경로로 합침
console.log('path.normalize():', path.normalize('/Users////pillgyeom//\/Desktop/nodepractice.path')); // /를 \로 바꿔줌
console.log('---------------------------------');
console.log('path.isAbsolute():', path.isAbsolute('/Users/pillgyeom')); // 절대 경로인지 상대 경로인지 boolean으로 반환
console.log('path.isAbsolute():', path.isAbsolute('../'));
console.log('---------------------------------');
console.log('path.relative():', path.relative('/Users/pillgyeom/Desktop/nodepractice/path/path.js', '/Users')); // 첫 번째 경로에서 두 번째 경로로 가는 방법을 알려줌
console.log('path.join():', path.join(__dirname, '..', '..', '/Users', '.', '/pillgyeom')); // ..과 .을 알아서 처리
console.log('path.resolve():', path.resolve(__dirname, '..', 'Users', '.', '/pillgyeom')); // ..과 .을 알아서 처리
console.log('__dirname : ',__dirname); // 현재 파일이 있는 경로