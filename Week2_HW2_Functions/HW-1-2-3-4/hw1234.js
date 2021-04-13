
// let num1,num2;
// function maxOfTwoNumbers(num1,num2){
//    if(num1>num2){
//      return num1;
//    }else{
//      return num2;
//    }
// }
// console.log(maxOfTwoNumbers(3,4));

// .........................................................

// let num1,num2,num3;
// function maxOfThreeNumbers(num1,num2,num3){
//    if((num1>num2) && (num1>num3)){
//         return num1;
//    }else if(num2>num3 && num2>num1){
//      return num2;
//    }else{
//      return num3;
//    }
// }
// .......................................................................

// function isCharacterAVowel(ch){
//   if(ch=='a' || ch=='e' || ch=='i' ||ch=='o'|| ch=='u'){
//      return " a vowel";
//   }else{
//     return "not a vowel";
//   }
// }
// ...............................................................


function sumArray(array1){
   let sum=0;
   for(let i=0; i<array1.length; i++){
     sum+=array1[i];
    }
  return sum;
  }