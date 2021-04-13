
//                                               how many vowels are there in a String
/*let count=0, str='Count how many VOWELS are there in the sentence.';

for(let i=0 ; i<(str.length) ; i++){
  if(str.charAt(i)=='a' || str.charAt(i)=='e' || str.charAt(i)=='i' || str.charAt(i)=='o' || str.charAt(i)=='u' 
     || str.charAt(i)=='A' || str.charAt(i)=='E' || str.charAt(i)=='I' || str.charAt(i)=='O' || str.charAt(i)=='U'){
        console.log('Vowel found :' + str.charAt(i));
        count++;
  }
}
console.log(count + ' vowels are there.');*/
// .....................................................................................
//                                                 STRING REVERSE

/*let str1='Hello World', str2='';
for(let i=str1.length-1; i>=0; i--){
  str2= str2+str1.charAt(i);
}
console.log(str2);*/
// ..........................................................................................
//                                                        DATATYPE 
let str1='1';
let num='1';
let str2='2';
if(str1==num){
  console.log('strings are similar');
}
if(str1===str2){
  console.log('strings are similar');
}else{
  console.log('Strings are not similar');
}