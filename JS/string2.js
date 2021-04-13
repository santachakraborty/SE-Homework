//TAKING MY NAME AND MAKING UPPERCASE OF FIRST LETTER OF MY LAST NAME(replace method)


/*let fName, lName,lName1;
console.log('Enter your name : ');
let fullName='Santa chakraborty';
console.log(fullName);
for(let i=0 ; i<(fullName.length) ; i++){
  if(fullName[i] === ' '){
     fName=fullName.slice(0,i);
     lName=fullName.slice(i+1,fullName.length);
     
  }
}
lName1=lName.replace(lName.charAt(0) , lName.charAt(0).toUpperCase());
console.log('Your Name is: ' + fName + ' ' + lName1);*/
//------------------------------------------------------------------
/*console.log('your message:');
let msg='gkgkkgkkggkgkgkkgkkk';
let msg1='';

for(let i=0; i<msg.length; i++){
    if(msg.length>=10){
      msg1=msg.slice(0,9);
    
    }else{
      console.log(msg);
    }
}
console.log(msg1);*/
// --------------------------------------------------------------

console.log("Enter password :");
let psw='1234567';
console.log(psw);
let psw1=[];
for(let i=0 ; i<(psw.length) ; i++){
     psw1.push('*');   
}
for(let i=0;i<psw1.length;i++){
  process.stdout.write(psw1[i]);
}




