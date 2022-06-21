
let obj ={
    num1:20,
    num2:30,
    num1:50
 
}

// When an object is passed with duplicate keys, the value of the key will be replaced by the last value of that key used in the declaration.
console.log(obj);

// output..
// {num1:50 ,num2:30}




let x= 20;
let y=30;

let sum = eval('x+y');
console.log(sum);

// function set(){

//     setTimeout(()=>{console.log(1),2000});
//     console.log(2);
//     setTimeout(()=>{console.log(3)});
//     console.log(4);
// }
// set()

// let a= 5;
// let b=6;
// while(a<=10){
//     a++;
//     b+=a*2
//     console.log(b);
// }

const set = new Set()
set.add(5);
set.add('marko');
set.add({name:'Sk'});
for(let item of set){
    console.log(item+10)
}