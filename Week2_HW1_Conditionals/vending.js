//Nando went to the vending machine, bought a cookie for $4. If he paid $10, how much money will he recieve in quarters?


let actualCost = 4;
let totalPaid = 10;
let remainingAmount = 0;       //money in quarters

while(actualCost < totalPaid){
   
   actualCost++;            //balance will start by increamenting 1
   remainingAmount = remainingAmount + (1*4);  //for every remaining dollar, 4 quarters will be added

}
if(actualCost > totalPaid){
   console.log('You do not have enough money to buy.');
}else {
   console.log('You will get ' + remainingAmount + ' quarters in return.');
}