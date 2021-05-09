'use strict'
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
    for (let i = 0; i < list.length; i++) {
      let text = i + '番、' + list[i].room + ',' + list[i].status;
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
  let list=fileOutput();
  list.push(new Person(room));
  fileInput(list);
}

const fs = require('fs');
function fileInput(list) {
  const a = JSON.stringify(list || "null");
  fs.writeFileSync('listFile', a);
}

function fileOutput() {
  const a = fs.readFileSync('listFile')
  const b = JSON.parse(a || "null");
  return b;
}

module.exports.changeStatus=Person.changeStatus;
module.exports.changeRoom=Person.changeRoom;
module.exports.allList=Person.allList;
module.exports.add=add;


function fileReset(){
  let a=[new Person('0')];
  let b=JSON.stringify(a);
  fs.writeFileSync('listFile',b);
}

async function test(){
  await fileReset();

}


test();
