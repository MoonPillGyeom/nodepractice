/**
 * 양방향 암호화
 * 
 */

const crypto = require('crypto');


console.log(crypto.getCiphers()); // 사용 가능한 알고리즘들을 반환
const cipher = crypto.createCipher('aes-256-cbc', 'key');
let result = cipher.update('암호화할 문장', 'utf8', 'base64');
console.log('암호화 final 전:', result);
result += cipher.final('base64');
console.log('암호화:', result); 

const decipher = crypto.createDecipher('aes-256-cbc', 'key');
let result2 = decipher.update(result, 'base64', 'utf8');
console.log('복호화 final 전:', result2);
result2 += decipher.final('utf8');
console.log('복호화:', result2);

