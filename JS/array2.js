
let num1=[];
let num2=[];
let num3=[];
let sum=0;

num1.push(10,3,4,8,6);
num2.push(3,9,5,11,1);

for(let i=0; i<num1.length; i++){
  sum=num1[i]+num2[i];
  num3.push(sum);
}
console.log('new array:')
for(let i=0; i<num1.length; i++){
  console.log(num3[i]);
}
// SORT & REVERSE &  POP WITH num3
let num4=[];
let temp;
// num4=num3.sort();
console.log('Sorted array:')

/*for(let i=0; i<num3.length-1; i++){
   for(let j=i+1; j<num3.length; j++){
    if(num3[i] > num3[j]){
       temp=num3[i];
       num3[i]=num3[j];
       num3[j]=temp;
     }
    }
  }*/
  for(let i=0; i<num3.length; i++){
    for(let j=0; j<num3.length-1; j++){
       if(num3[j] > num3[j+1]){
          temp=num3[j];
          num3[j]=num3[j+1];
          num3[j+1]=temp;
      }
    }
  }

console.log(num3);

