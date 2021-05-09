const http = require('http');
const fs = require('fs');
const { mainModule } = require('process');

function add(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  //const html = require('fs').readFileSync('reception.html');
  //res.write(html);

  var data = '';
  req.on('data', function (chunk) { data = data + chunk })
    .on('end', function () {
      const main=require('./main');
      main.add(data);
      const html = require('fs').readFileSync('accounting.html');
      res.write(main.allList());
      res.end();
    });
}
class Person {
  constructor(room) {
    this.room = room;
    this.status = 'reception';
    const date = new Date;
    this.startTime = date;
  }
}


/**
 * 人の追加
 * @param {*} room 割り当てられた部屋
 */
function add(room) {
  for (i = 0; i < 20; i++) {
    
  }
}
function write() {
  let data = '';
  for (i = 0; i < list.length; i++) {
    text = i + '番、' + list[i].room + ',' + list[i].status;
    data = data + '<option value=' + i + '>' + text + '</option>';
  }
  let select = '<select name=\'list\' size=\'10\'>' + data + '</select>'
  return select;

}




module.exports.add = add;