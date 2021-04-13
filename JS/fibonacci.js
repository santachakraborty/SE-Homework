let num1=0, num2=1;
let range=1, sum=0;



while(range<=10){
  if(num1==0 && num2==1){ 
    process.stdout.write('Fibonacci series: ' + num1 + ' ' +num2 + ' ');
  }
   sum=num1 + num2;
   process.stdout.write(sum + ' ');
   num1=num2;  // num1=1
   num2=sum; //num2=1
   range++;
  
}
