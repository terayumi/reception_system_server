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
 * 
 * @param {*} room 割り当てられた部屋
 */
function add(room) {
  list.push(new Person(room));
}

/**
 * @param newStatus 変更するステータス
 * @param number 変更する人
 */
function changeStatus(number, newStatus) {
  list[number].status = newStatus;
}

/**
 * 
 */
function allList() {
  let allList = [];
  let time;

  for (let i = 0; i <= list.length - 1; i++) {
    allList[i] = [list[i].room, list[i].status, list[i].startTime];
  }

  return allList;
}
window.onload=function(){
  const addButton = document.getElementById('add');
  
  const roomNameInput = document.getElementById('roomName');
  addButton.onclick=function(){
    const roomName = roomNameInput.value;
    if (roomName.length === 0) {
      alert('部屋名が選択されていません');
      return;
    }
    add(roomName);
    console.log(allList());
    write();
  }
}

/**
 * 
 * @param {HTMLElement} element 
 */
function removeAllChildren(element){
  while(element.firstChild){
      element.removeChild(element.firstChild);
  }    
}

function write(){
  const allListArea = document.getElementById('allList');
  removeAllChildren(allListArea);
  const writeList=document.createElement('ul');
  
  
  /*const header = document.createElement('h3');
    header.innerText = '診断結果';
    allListArea.appendChild(header);

    const paragraph = document.createElement('p');
    const result = 'abcde';
    paragraph.innerText = result;
    allListArea.appendChild(paragraph);*/


  for(i=0;i<list.length;i++){
    const text=document.createTextNode(i+'番,'+list[i].room+','+list[i].status+',['+list[i].startTime+']');
    console.log(text);
    const li=document.createElement('li');

    li.appendChild(text);
    writeList.appendChild(li);
  }
  allListArea.appendChild(writeList);

}
/*function update() {
  const paragraph = [];
  const list=[] ;
  list=allList();
  for (i = 0; i <= list.length; i++) {
    paragraph[i].innerText = '受付番号' + i + '部屋名' + list[i][0] + '状態' + list[i][1] + '[' + list[i][2] + ']';
  }
  for (i = 0; i <= paragraph.length; i++) {
    allListArea.appendChild(paragraph[i]);
  }
}*/

function testStart() {

  add('room1');
  add('room2');
  console.log(list[0]);
  console.log(allList());
 
}

testStart();