

let minBalance=1000;
let transferAmount=500;
let transactionType='deposit';
let msg1='yyyyyyyyyyyyyyyyyyyyyyyy'
// let depositType='check';
let depositType='check/cash';
if(depositType.slice(0,2)=='ch'){
  
}else{

}
let depositAmount=300;
let str="Your transaction completed";

process.stdout.write('Enter email : ');
let email='santa@gmail.com';
console.log(email);
if(email.includes('@')){
  process.stdout.write('');
}else{
  console.log('Please enter correct email.');
}
console.log();

let psw='123456';
process.stdout.write("Enter password :");
let psw1=[];
for(let i=0 ; i<(psw.length) ; i++){
     psw1.push('*');   
}
for(let i=0;i<psw1.length;i++){
  process.stdout.write(psw1[i]);
}
console.log();

console.log('Login successful.');


if( transactionType === 'transfer')
    if(minbalance>=transferAmount){
      minBalance=minBalance-transferAmount;
      console.log(str.concat(" Account balance is updated"));
    }else{
       console.log('You do not enough money to transfer.');
}else if(transactionType==='deposit' && depositType==='check'){
    console.log(str.concat(", Deposit Amount will be updated after 3 working day"));
    minBalance+=depositAmount;
    console.log(minBalance);
}else{
    console.log();
}



