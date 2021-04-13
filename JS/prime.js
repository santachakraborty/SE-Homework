let num=17;
let a;
let isPrime =false;
for(a=2; a<num; a++){
  if( num %a == 0)  {
    isPrime=true;
    break;
   }

  // else{
  //   IsPrime=false;
  // }
}
if(!isPrime){
console.log(num + ' is prime.');
}
else{
console.log(num + ' is not prime.');
}
// ----------------------------------------------------------------------------------
// let start=1, end=15;
// let flag=0,a;
// let range;
// for(range=start; range<=end; range++){
//     for(a=2; a<range; a++){
//       if( range %a == 0)  {
//         flag=1;
//         break;
//        }
  
//       else{
//         flag=0;
//       }
//   }
//    if(flag===0){
//    console.log(range + ' is prime.');
//     }
//    else{
//     console.log(range + ' is not prime.');
//    }
// }
