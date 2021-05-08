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
/*function allList() {
  let allList = [];
  let time;

  for (let i = 0; i <= list.length - 1; i++) {
    allList[i] = [list[i].room, list[i].status, list[i].startTime];
  }

  return allList;
}*/

//起動時の処理
window.onload=function(){
  write();
  const addButton = document.getElementById('add');
  const enterButton =document.getElementById('enter');
  const leaveButton=document.getElementById('leave');
  const endButton=document.getElementById('end');
  try{
    addButton.onclick=function(){addButtonClicked()};
  }catch{}
  try{
    enterButton.onclick=function(){enterButtonClicked()};
  }catch{}
  try{
    leaveButton.onclick=function(){leaveButtonClicked()};
  }catch{}
  try{
    endButton.onclick=function(){endButtonClicked()};
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
  for(i=0;i<list.length;i++){
    if(list[i].room==='room1' && list[i].status==='reception'){
      changeStatus(i,'room');
      write();
      return;
    }
  }
  alert('入室を待っている人はいません');
}

/**
 * leaveボタンが押された時の処理
*/
function leaveButtonClicked(){
  for(i=0;i<list.length;i++){
    if(list[i].room==='room1' && list[i].status==='room'){
      changeStatus(i,'accounting');
      write();
      return;
    }
  }
  alert('部屋には誰もいません');
}

/**
 * endボタンが押された時の処理 
 */
function endButtonClicked(){
  console.log('エンド');
  for(i=0;i<list.length;i++){
    if(list[i].status==='accounting'){
      changeStatus(i,'end');
      write();
      return;
    }
  }
  alert('会計を待っている人はいません');
}

/**
 * リセット関数
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
  allListArea.appendChild(getAllList());
}

/**
 * allList取得
 */
function getAllList(){
  const writeList=document.createElement('ul');
  for(i=0;i<list.length;i++){
    const text=document.createTextNode(i+'番,'+list[i].room+','+list[i].status+',['+list[i].startTime+']');
    const li=document.createElement('li');
    li.appendChild(text);
    writeList.appendChild(li);
  }
  return writeList;
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
  add('room1');
  
}

testStart();