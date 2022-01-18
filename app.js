// Ejercicio 1
/* Intento 1
var line = ["Sofia" , "David" , "Juan"];
console.log(line);
line.push("Sara" , "Agustin");
console.log(line);
line.push("Renata");
line.splice(3,1, "Renata");
line.splice(4,1, "Sara");
line.splice(4,1, "Agustin");
console.log(line);
*/
/*
//Exercise 1
//Intento 2
//Part One
var people=["Sofía","David","Juan"];

console.log(people);


//Part 2

people.push("Sara","Agustin");
people.shift();
console.log(people);

people.splice(1,0,"Renata");
people.push("Elena");
console.log(people);
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

var x,y,z;
for(x=1; x <=10; x++)
{
    for (y=1; y < x; y++)
    {
    z=z+("*");        
    }
    console.log(z);
    z='';    
}

*/

/*

let i = "",j= "",k = "";
for(i=1;i<=6;i++) 
{
    for(j=1;j<=i;j++){
        k = k + ("*");
    }
    console.log(k);
    k="";
}

*/

//Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
//as long as xValue remains positive.

let x=15;
while(x>=0){
    console.log(x);
    x -=0.5;
}

//- Print all the odd numbers between 1 - 100.

let oddnumbers=1
while(oddnumbers<100){
    console.log(oddnumbers);
    oddnumbers += 2;
}

//- Write a method with a while loop to print 1 through n in square brackets. 
//For example, if n = 6 print [1] [2] [3] [4] [5] [6]

var w=1;
let m='';
while(w<=6){
    m=m+"["+w+"]";
    w++;
}
console.log(m);

/* - Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n
Examples:
n = 5 sum = 15
n = 19 sum = 190 */


let suma = 0;
let n = 20;
let i = 0;
while (i < n) {
    i++;
    suma += i;
}
console.log(suma);