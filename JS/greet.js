// var date=new Date();
// console.log(date);

var hour=new Date().getHours();
var min=new Date().getMinutes();
var sec=new Date().getSeconds();

if(hour<12){
   console.log('Good Morning All');
}else if(hour>12 && hour<16){
  console.log('Good Afternoon');
}else{
  console.log('Hello,how Are you');
}
console.log(hour+ ':' +min + ':' + sec);