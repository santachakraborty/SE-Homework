
// let row,col;
// for(row=1; row<=5; row++){
//   for(col=1; col<=row; col++){
//     process.stdout.write(row.toString() + ' ');
//   }
//   console.log();
// }

// ................................................................
let row,col;
for(row=5; row>=1; row--){
  for(col=1; col<=row; col++){
    process.stdout.write(col.toString() + ' ');
  }
  console.log();
}

