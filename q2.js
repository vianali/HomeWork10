// 2. Repeat the program in 1, except, starting from the end of the array and traversing backwards.
// 1. Write the following programs:
//  - Write a JavaScript program that will loop through array a, and capitalizes every third word.
//  - Create a Ruby program that does exactly the same thing.

var a=["john","mike","susan","matt","joe","larry","ken","samantha","jenny","Sara","henry"];

var i=0;
var j=0;
var aChar=0;
var word1='';
var word2='';

{
for(j=a.length-1; j>0; j=j-1)
{
    word1=a[j];
     word2='';
     if ((j+1)%3===0){
 for (i = 0; i<word1.length; i++){  
 aChar = word1.charCodeAt(i);
   if (65 <= aChar && aChar<=90){
   aChar =aChar + 32;
   }
   word2=word2+word1.charAt(i).toUpperCase();
}
console.log(word2);
}    
 }
}