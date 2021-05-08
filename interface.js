import{
  add,
  changeStatus,
  write
}
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
