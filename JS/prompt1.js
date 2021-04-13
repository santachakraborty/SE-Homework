var num1=178;
if(num1>0){
  if(num1>=50 && num1<=100){
    console.log('The number ' + num1 + ' is positive and within range. ');
  }else{
    console.log('The number ' +num1 + ' is positive, but not within range.');
  }
}else{
  if(num1===0){
    console.log('The number ' + num1 + ' is zero');
  }else{
    console.log('The number ' + num1 + ' is negative');
  }
}