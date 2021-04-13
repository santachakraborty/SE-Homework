let number=153;
let rem;
let quotient, sum=0;

givenNo=number;

while(quotient!=0){
  rem=number % 10;
  quotient= Math.floor(number/10);
  
  sum = sum + (rem * rem* rem)
  number=quotient;
}

if(sum == givenNo){
  console.log('The no ' + givenNo + ' is an amstrong number.');
}else{
  console.log('The no ' + givenNo + ' is not an amstrong number.');
}