
// let num=[1,2,3,4,5,6,7];
let num=[], sum=0;
/*console.log('Enter values: ');
for(let i=0; i<5; i++){
  num.push(i);
}*/
num.push(2,3,4,5,6);
for(let i=0; i<num.length; i++){
  console.log(num[i]);
}
for(let i=0; i<num.length; i++){
  sum+=num[i];
  
}
console.log('sum is: ' + sum);

//increase by 2
// for(let i=0; i<num.length; i++){
//   console.log(num[i]+=2);
