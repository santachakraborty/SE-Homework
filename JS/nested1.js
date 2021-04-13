//Cash withdrawal activity

let limit=600;


let pin=1234;
let accountType= 'savings';
let wAmount=700;
let balance=400;

if(pin==1234){
  if(accountType === 'savings'){
     if(balance>300){
      //  console.log('You have enough balance, you can withdraw money.');
       if(wAmount>=limit){
         console.log('exceeded daily limit, please enter correct amount.');
       }else{
         console.log('withdrawal successful');
       }
     }else{
       console.log('You do not have enough money');
     }
  }else if(accountType === checking){
     
  }
}else{
  console.log("You have entered incorrect pin");
  
}