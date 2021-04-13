//Generate random number
// console.log(Math.random());
// console.log(Math.random()*6);
// console.log(Math.floor(Math.random()*6));
// console.log(Math.floor(Math.random()*6)+1);

// ------------------------------------------------------
//GENERATE RANDOM NOS WITHIN A RANGE:-

// function randomNo(start, end) {
//   var range = (end - start) + 1;
//   return Math.floor(Math.random() * range) + start;
// }
// console.log(randomNo(1, 4));

// -----------------------------------------------------------------
//GENERATE RANDOM NUMBERS FROM (1-7) & DISPLAY DIFFERENT MESSAGES:-

function randomNum(start, end) {
  var range = (end - start) + 1;
  return (Math.floor(Math.random() * range) + start);
}

var val = randomNum(1, 7);
console.log(val);

if (val === 1 ) {
    console.log("Signs point to yes.");
} else if (val === 2 ) {
    console.log("Outlook good.");
} else if (val === 3 ) {
    console.log("It is decidely so.");
} else if (val === 4 ) {
    console.log("Reply hazy, ask again.");
} else if (val === 5 ) {
    console.log("Concentrate and ask again.");
} else if (val === 6 ) {
    console.log("My sources say no.");
} else {
    console.log("Don't count on it.");
}