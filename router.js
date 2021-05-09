'use strict'
function router(req, res) {
  const http = require('http');
  const fs = require('fs');
  const main = require('./main')
  const handler_add = require('./handler_add')
  if (req.url === '/reception') {
    if (req.method === 'POST') {
      console.log('a');
      handler_add.add(req, res);
    } else if (req.method === 'GET') {
      console.log('b');
      const receptionHTML = require('fs').readFileSync('reception.html');
      res.write(receptionHTML);
      res.write(main.allList());
    }

  }
  /*switch (req.method) {
    
    case 'GET':
      switch (req.url) {
        case '/reception':
          const receptionHTML = require('fs').readFileSync('reception.html');
          res.write(receptionHTML);
          res.write(main.allList());
          break;
        case '/room':
          const roomHTML = require('fs').readFileSync('room.html');
          res.write(roomHTML);
          res.write(main.allList());
          res.end();
          break;
        case '/accounting':
          const accountingHTML = require('fs').readFileSync('accounting.html');
          res.write(accountingHTML);
          break;
          
      }

    case 'POST':
      switch (req.url) {
        case '/reception':
          console.log();
          handler_add.add(req, res);
          break;

      }
  }*/
  //  res.end();
}



exports.router = router;