'use strict'
const http = require('http');
const fs = require('fs');
const router=require('./router');
const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  router.router(req,res);
})

console.log('Listening on 8000');
server.listen(8000, 'localhost');
