const fs=require('fs');
let text=[];
for(i=0;i<20;i++){
  text[i]=i*10;
}
console.log(text);
let textarray=JSON.stringify(text);
fs.writeFileSync('text',textarray);
const a=fs.readFileSync('text');
let b=JSON.parse(a);
console.log(b);