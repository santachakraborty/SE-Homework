//Date and current time
let startingPoint= 10, endingPoint=10000;
date=new Date().getDate();

month=new Date().getMonth();
year=new Date().getFullYear();

console.log('Date : ' + month + '-' + date + '-' + year);

// for(count=startingPoint; count<=endingPoint; count++){
//     hour=new Date().getHours();
//     min=new Date().getMinutes();
//     sec=new Date().getSeconds();
  
//     if(hour>12){
//       hour=hour-12;
//       h='PM';
//     }
//     if(hour<=12){
//       h='AM';
//     }
//     if(min<10){
//       min= '0' + min;
//     }
//     if(sec<10){
//       sec= '0' + sec;
//     }
//     console.log( hour + ':' + min + ':' + sec + ' ' + h);
// }
// console.log('       ' + hour + ':' + min + ':' + sec + ' ' + h);

    count=startingPoint;
    while(count<=endingPoint){
    hour=new Date().getHours();
    min=new Date().getMinutes();
    sec=new Date().getSeconds();
  
    if(hour>12){
      hour=hour-12;
      h='PM';
    }
    if(hour<=12){
      h='AM';
    }
    if(min<10){
      min= '0' + min;
    }
    if(sec<10){
      sec= '0' + sec;
    }
    console.log( hour + ':' + min + ':' + sec + ' ' + h);
    count++
  }