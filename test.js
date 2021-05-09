/*var jsdom    = require("jsdom").jsdom,
    document = jsdom("<html><head></head><body>hello world</body></html>"),
    window   = document.createWindow();

console.log(window.document.innerHTML);
// output: '<html><head></head><body>hello world</body></html>'

console.log(window.innerWidth)
// output: 1024

console.log(typeof window.document.getElementsByClassName);
// outputs: function*/
const fs = require('fs');

add('room1');



class Person {
  constructor(room) {
    this.room = room;
    this.status = 'reception';
    const date = new Date;
    this.startTime = date;
  }

  /**
 * ルーム変更
 * @param newroom 変更する部屋
 * @param number 変更する人
 */
  static changeRoom(number, newroom) {
    let list=fileOutput();
    list[number].room = newroom;
    fileInput(list);
  }

  /**
 * ステータス変更
 * @param newStatus 変更するステータス
 * @param number 変更する人
 */
  static changeStatus(number, newStatus) {
    let list=fileOutput();
    list[number].status = newStatus;
    fileInput(list)
  }

  /**
 * allList取得
 */
  static allList() {
    let list = fileOutput();
    let data = '';
    for (i = 0; i < list.length; i++) {
      text = i + '番、' + list[i].room + ',' + list[i].status;
      data = data + '<option value=' + i + '>' + text + '</option>';
    }
    let select = '<select name=\'list\' size=\'10\'>' + data + '</select>'
    fileInput(list);
    return select;

  }
}


/**
 * 人の追加
 * @param {*} room 割り当てられた部屋
 */
function add(room) {
  //let list=fileOutput();
  let list=[];
  var person=new Person(room);
  list.push(person);
  fileInput(list);
}

function fileInput(list) {
  const a = JSON.stringify(list || 'null');
  fs.writeFileSync('listFile', a);
}

function fileOutput() {
  const a = fs.readFileSync('listFile')
  const b = JSON.parse(a || 'null');
  return b;
}

module.exports.changeStatus=Person.changeStatus;
module.exports.changeRoom=Person.changeRoom;
module.exports.allList=Person.allList;
module.exports.add=add;



function test(){
  const test=[1,2,3,4,5,6,7,8,9,0];
  
  fs.writeFileSync('listFile',JSON.stringify(test));
  add();
  add();
  add();
  add();
  add();
  add();
  let x='';
  x=Person.allList;
  console.log(x);
  let y='';
  y=Person.allList;
  console.log(y);

}

//test();
