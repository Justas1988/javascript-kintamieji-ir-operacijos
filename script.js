"use strict"

var skaicius1, skaicius2, skaicius3, skaicius4, suma, sandauga, bendras, temp, maxSkaicius;

skaicius1 = 1;
skaicius2 = 2;
skaicius3 = 3;
skaicius4 = 4;

suma = skaicius1 + skaicius2 + skaicius3 + skaicius4;
sandauga = skaicius1 * skaicius2 * skaicius3 * skaicius4;

bendras = 'Suma: ' + suma + ' Sandauga: ' + sandauga;

console.log(skaicius1, skaicius2, skaicius3, skaicius4);
console.log(bendras);


//Sukeitimas skaicius1 ir skaicius2 su laikinuoju kintamuoju

temp = skaicius1;
skaicius1 = skaicius2;
skaicius2 = temp;

console.log(skaicius1, skaicius2);
// alert(skaicius1);
// alert(skaicius2);

//Sukeitimas skaicius3 ir skaicius4 be laikinojo kintamojo

skaicius3 = skaicius3 + skaicius4;
skaicius4 = skaicius3 - skaicius4;
skaicius3 = skaicius3 - skaicius4;

console.log(skaicius3, skaicius4);

//maximalus skaicius

maxSkaicius = Number.MAX_SAFE_INTEGER + 1;

console.log(maxSkaicius);

//Skaicius5 ir Skaicius6

var skaicius5, skaicius6;

skaicius5 = 5;
skaicius6 = 6;

skaicius5 = skaicius5 ^ skaicius6;
skaicius6 = skaicius5 ^ skaicius6;
skaicius5 = skaicius5 ^ skaicius6;

console.log(skaicius5, skaicius6);



