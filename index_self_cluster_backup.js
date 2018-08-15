process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster');


console.log('Test for Cluster IsMaster : ', cluster.isMaster);

//check if node program is being executed in master mode?
if(cluster.isMaster) {
  //If so node program(index.js) will executed again in child/slave mode
  cluster.fork();
  cluster.fork();
  //cluster.fork();
  //cluster.fork();
  //cluster.fork();
  //cluster.fork();
  /*number of worker thread will be equal to number of times cluster.fork() get executed*/
}
else {
  //this else block is executed in child mode(worker thread) and will act like an server
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
}
