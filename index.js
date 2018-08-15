const express = require('express');
const crypto = require('crypto');
const nodeapp = express();
nodeapp.get('/', (req,res) => {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    res.send('Test for crypto');
  });
  //res.send('King of darkness');
})
nodeapp.get('/furious', (req,res) => {
  res.send('This is fate of furious');
})
nodeapp.listen(3000);
