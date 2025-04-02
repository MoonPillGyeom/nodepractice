/** global 객체의 남용 금지
 * 프로그램의 규모가 커질수록 어떤 파일에서 global 객체에 값을 대입했는지 알기 어려워짐
 */

const A = require('./globalA');

global.message = '반갑습니다.';
console.log(A());
