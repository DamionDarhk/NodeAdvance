const https = require('https');

const start = Date.now();

function doRequest() {
  https
    .request('https://www.google.com', res => { //here res is callback function
      res.on('data', () => {});
      res.on('end', () => {
        console.log('Test https Output 1:', Date.now() - start);
      });
    })
    .end();
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();

/*here libuv delegates Netwpork operation to OS, so this doesn't goto Node threadpool.
libuv doesn't perform low level operating tasks*/
