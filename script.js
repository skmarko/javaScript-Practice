let a=50;
let b=100;

a= a+b;
b=a-b;
a=a-b;

console.log('Value of a '+a)
console.log('value of b '+b);

console.log("XOR fucntion used for swaping");
let c=1000;

let d=2000;
c= c^d;
d=c^d;
c=c^d
console.log('Value of a '+c)
console.log('value of b '+d);

console.log('ES6 method to swap');

let n1= 5000;
let n2=10000;

[n1,n2]=[n2,n1]

console.log(n1,n2);