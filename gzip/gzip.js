const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('./gzip/write.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./gzip/write.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);
