
// let start=1;
// let end=6;

// for( let i=start; i<=end; i++){
//   for(let j=start; j<=i; j++){
//      process.stdout.write('#' + ' ');
//   }
//   console.log();
// }


let start=1;
let end=6;

for( let i=end; i>=start; i--){
  for(let j=start; j<=i; j++){
     process.stdout.write('#' + ' ');
  }
  console.log();
}