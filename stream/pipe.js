const fs = require('fs');

const readStream = fs.createReadStream('./stream/readme2.txt');
const writeStream = fs.createWriteStream('./stream/write.txt');
readStream.pipe(writeStream);
