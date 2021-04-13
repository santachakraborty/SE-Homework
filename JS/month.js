//print month and day of the week
let month=13;
let day=8;
let monthName,day1;

if(month>=1 && month<=12){
   if(month===1)
     monthName='January';
   else if (month===2){
     monthName='February';}
   else if(month===3){
     monthName='March';}
   else if(month===4){
     monthName='April';}
    else if(month===5){
      monthName='May';}
   else if(month===6){
     monthName='June';}
   else if(month===7){
     monthName='July';}
   else if(month===8){
     monthName='August';}
   else if(month===9){
    monthName='September';}
  else if(month===10){
      monthName='October';}
  else if(month===11){
        monthName='November';}
  else if(month===12){
      monthName='December'; }
  
}else{
  monthName='Invalid month.'
}
console.log('Month is: ' + monthName);

if(day>=1 && day<=7){

    if(day===1){
       day1='Sunday'
    }else if(day===2){
     day1='Monday';
    }else if(day===3){
      day1='Tuesday';
    }else if(day===4){
      day1='Wednesday';
    }else if(day===5){
      day1='Thursday';
    }else if(day===6){
      day1='Friday';
    }else if(day===7){
      day1='Saturday';
    }
  }else{
    day1='Invalid day';
  }
  console.log('Day is: ' + day1);

// if(month===2){
//   if((day>=1) && (day<=7)){
//     if(day===1){
//       console.log('It is February, Day: Sunday');
//     }
//     if(day===2){
//       console.log('It is February Day: Monday');
//     }
//     if(day===3){
//       console.log('It is February, Day: Tuesday');
//     }
//     if(day===4){
//       console.log('It is February, Day: Wednesday');
//     }
//     if(day===5){
//       console.log('It is February, Day: Thursday');
//     }
//     if(day===6){
//       console.log('It is February, Day: Friday');
//     }
//     if(day===7){
//       console.log('It is February, Day: Saturday');
//     }
//   }else{
//     console.log('Invalid Day');
//   }
// }

// if(month===2){
//   if((day>=1) && (day<=7)){
//     if(day===1){
//       console.log('It is February, Day: Sunday');
//     }
//     if(day===2){
//       console.log('It is February Day: Monday');
//     }
//     if(day===3){
//       console.log('It is February, Day: Tuesday');
//     }
//     if(day===4){
//       console.log('It is February, Day: Wednesday');
//     }
//     if(day===5){
//       console.log('It is February, Day: Thursday');
//     }
//     if(day===6){
//       console.log('It is February, Day: Friday');
//     }
//     if(day===7){
//       console.log('It is February, Day: Saturday');
//     }
//   }else{
//     console.log('Invalid Day');
//   }
// }

// if(month===3){
//   if((day>=1) && (day<=7)){
//     if(day===1){
//       console.log('It is March, Day: Sunday');
//     }
//     if(day===2){
//       console.log('It is March Day: Monday');
//     }
//     if(day===3){
//       console.log('It is March, Day: Tuesday');
//     }
//     if(day===4){
//       console.log('It is March, Day: Wednesday');
//     }
//     if(day===5){
//       console.log('It is March, Day: Thursday');
//     }
//     if(day===6){
//       console.log('It is March, Day: Friday');
//     }
//     if(day===7){
//       console.log('It is March, Day: Saturday');
//     }
//   }else{
//     console.log('Invalid Day');
//   }
// }