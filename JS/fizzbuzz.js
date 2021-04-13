//Fizzbuzz
// let start=1;
// let end=50;
// for(count=start; count<=end; count++){
//   if(count%3==0 && count%5==0){
//     console.log(count + ' = FizzBuzz');
//   }else if(count%3==0){
//      console.log(count + ' = Fizz');
//    }else if(count%5==0){
//      console.log(count + ' = Buzz');
//    }
   
// }

let start=1;
let end=30;

let count=start;
while(count<=end){
  if(count%3==0 && count%5==0){
       console.log(count + ' = FizzBuzz');
      }else if(count%3==0){
        console.log(count + ' = Fizz');
      }else if(count%5==0){
         console.log(count + ' = Buzz');
       }
  count++;
}
