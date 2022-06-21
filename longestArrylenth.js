// console.log('Find Longest arrey');

// let arry= ['aggs','jsdj','kfjfh','dhjdhsy','kdfhhf'];
// //  arry length long to short
// console.log(arry.sort((a,b)=>b.length-a.length));

// // arry lenght short to long
// console.log(arry.sort((a,b)=>a.length-b.length));

// function sortLong(e){

//     var shortLon = e.split(' ').sort((eleA ,eleB)=>
//         eleB.length -eleA.length)
//         return shortLon[0]
// }

// console.log(sortLong('Hello Mr Marko JI Khandwa wale indorecity cleanest city'));

function revse(text){

    let name = text.split('');
    let rev= name.reverse();
    let mk= rev.join('');
     return mk
}
console.log(revse('MARKO_G'))