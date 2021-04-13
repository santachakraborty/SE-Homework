var num1=80;
// var grade;

if(num1 >=91 && num1<=100){
  grade="A";
  
  
}else if(num1 >=81 && num1<=90){
  
  grade="B";
}else if(num1 >=71 && num1<=80){
  
  grade="B-";
}else if(num1 >=61 && num1<=70){
  grade="C";
  
}else{
  grade="Fail";
}
console.log("You got grade " + grade);