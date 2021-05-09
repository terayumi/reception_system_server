'use strict';
const http = require('http');
const fs = require('fs');
const { mainModule } = require('process');
const main = require('./main');

function add(req, res) {
  let data = '';
  req.on('data', function (chunk) { data = data + chunk })
    .on('end', function () {
      
      if (!data) {
        
        res.write('<p>部屋が登録されていません</p>')
      } else {
        main.add(data);
      }
      const receptionHTML = require('fs').readFileSync('reception.html');
      res.write(receptionHTML);
      res.write(main.allList());
      res.end();
      //res.writeHead(301, {'Location': 'http://localhost:8000/reception'});

    });
}

module.exports.add = add;