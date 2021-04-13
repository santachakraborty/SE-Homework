//                                     Palindrome
let str='racecar';
let current='';
let j;
// for(let i=str.length-1 ; i>=0 ; i--){
//   // for( j=0 ; j<i; j++){
//     // current=str.slice(i,1);
//     current += str.slice(i,1);
//     console.log(current.charAt(current));
    
//   }
  
 for(let i=str.length-1; i>=0; i--){
   current= current + str.charAt(i);
   console.log(current);
 }

if(current===str){
  console.log(str + ' is a palindrome string');
}else{
  console.log(str + ' is not a palindrome string.');
}