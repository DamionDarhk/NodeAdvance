process.env.UV_THREADPOOL_SIZE = 1;

const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doRequest() {
  https
    .request('https://www.google.com', res => { //here res is callback function
      res.on('data', () => {});
      res.on('end', () => {
        console.log('Test https Output :', Date.now() - start);
      });
    })
    .end();
}

function doHash() {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('Test Hash Output :', Date.now() - start);
  });
}

doRequest();

fs.readFile('multitask.js', 'utf8', () => {
  console.log('Test FS Output: ', Date.now() - start);
})

doHash();
doHash();
doHash();
doHash();
