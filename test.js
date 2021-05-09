'use strict'
const http = require('http');
const fs = require('fs');
const router=require('./router');
const server = http.createServer((req, res) => {
  if(req.method==='GET'){
    console.log('get');
  }else if(req.method==='POST'){
    console.log('post');
  }
})

console.log('Listening on 8000');
server.listen(8000, 'localhost');
