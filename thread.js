process.env.UV_THREADPOOL_SIZE = 5;

const crypto = require('crypto');

const start = Date.now();

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('Test 1:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('Test 2:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('Test 3:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('Test 4:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('Test 5:', Date.now() - start);
});
