import { add, allList } from "./main";

const roomNameInput=document.getElementById('roomName');
const addButton=document.getElementById('add');
const allListArea=document.getElementById('allList');

addButton.onclick=function(){
    const roomName=roomNameInput.nodeValue;
    if(roomName.length===0){
      console.error('部屋名が入力されていません');
      return;
    }
    add(roomName);

}

const list;
const paragraph=[];
function update(){
  list=allList();
  for(i=0;i<=list.length;i++){
    paragraph[i].innerText='受付番号'+i+'部屋名'+list[i][0]+'状態'+list[i][1]+'['+list[i][2]+']';
  }
  for(i=0;i<=paragraph.length;i++){
    allListArea.appendChild(paragraph[i]);
  }
}

function testStart(){
  add('room1');
  add('room2');
  console.log(allList());

}

testStart();