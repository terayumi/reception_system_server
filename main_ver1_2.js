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
 * 追加
 * @param {*} room 割り当てられた部屋
 */
function add(room) {
  list.push(new Person(room));
}

/**
 * ステータス変更
 * @param newStatus 変更するステータス
 * @param number 変更する人
 */
function changeStatus(number, newStatus) {
  list[number].status = newStatus;
}

/**
 * 全体のリスト
 * @returns alllist[][]
 */
function allList() {
  let allList = [];
  let time;

  for (let i = 0; i <= list.length - 1; i++) {
    allList[i] = [list[i].room, list[i].status, list[i].startTime];
  }

  return allList;
}

//起動時の処理
window.onload=function(){
  write();
  const addButton = document.getElementById('add');
  const enterButton =document.getElementById('enter');
  const leaveButton=document.getElementById('leave');
  try{
    addButton.onclick=function(){addButtonClicked()};
  }catch{}
  try{
    enterButton.onclick=function(){enterButtonClicked()};
  }catch{}
  try{
    leaveButton.onclick=function(){leaveButtonClicked()};
  }catch{}

}

/**
 * addボタンが押された時の処理
 */
function addButtonClicked(){

  const roomNameInput = document.getElementById('roomName');
  const roomName = roomNameInput.value;
    if (roomName.length === 0) {
      alert('部屋名が選択されていません');
      return;
    }
    add(roomName);
    write();
}

/**
 * enterボタンが押された時の処理
 */
function enterButtonClicked(){
  console.log('a');
  for(i=0;i<list.length;i++){
    if(list[i].room==='room1' && list[i].status==='reception'){
      changeStatus(i,'room');
      write();
      break;
    }
    alert('入室を待っている人はいません');
  }
}

/**
 * leaveボタンが押された時の処理
*/
function leaveButtonClicked(){
  for(i=0;i<list.length;i++){
    if(list[i].room==='room1' && list[i].status==='room'){
      changeStatus(i,'accounting');
      write();
      break;
    }
    alert('部屋には誰もいません');
  }
}

/**
 * write用のリセット関数
 * @param {HTMLElement} element 
 */
function removeAllChildren(element){
  while(element.firstChild){
      element.removeChild(element.firstChild);
  }    
}
/**
 * allList表示
 */
function write(){
  const allListArea = document.getElementById('allList');
  removeAllChildren(allListArea);
  const writeList=document.createElement('ul');

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

  //add('room1');
  //add('room2');
  console.log(list[0]);
  console.log(allList());
 
}

testStart();