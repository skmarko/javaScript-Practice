var fizz=(n)=>{
 for(var i=1;i<=n;i++){
     if(i % 3===0 && i % 5===0){
         console.log('FizzBuzz');
     }  else if(i % 3===0 ){
        console.log('Fizz');
    }
    else if(i % 5===0 ){
        console.log('Buzz');
    }
    else{
        console.log('All Cond. False', i);
    }
 }
}
fizz(20)

// //  Arrow function ES6 Modern function
// let fun;
// fun=()=>{
//     console.log('This is arrow function');
// }
// fun();

// fun =(e)=>'Hello'+e;
// console.log(fun('DUbey Ji'));
