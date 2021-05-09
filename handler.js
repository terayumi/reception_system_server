const http = require('http');
const fs = require('fs');

function add(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  const html = require('fs').readFileSync('reception.html');
  res.write(html);

  var data = '';
  req.on('data', function (chunk) { data = data + chunk })
    .on('end', function () {
      add(data);
      const html = require('fs').readFileSync('accounting.html');
      res.write(write());
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
let list = [];

/**
 * 人の追加
 * @param {*} room 割り当てられた部屋
 */
function add(room) {
  for (i = 0; i < 20; i++) {
    list.push(new Person(room));
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

function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}


module.exports.add = add;