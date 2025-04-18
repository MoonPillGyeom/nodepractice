/**
 * 단방향 암호화
 * 보안취약
 */

const crypto = require('crypto');

const test = crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString('base64');
  console.log('salt: ', salt);
  crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
    console.log('password: ', key.toString('base64'));
  });
});

test;
