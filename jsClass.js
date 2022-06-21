console.log('Hello Ji');

const fun = (name)=>{

    let length=0;
    while(name[length]!==undefined)
    length++;
    return length;
}
console.log(fun(""));

const mk=(e)=>{
return e.charAt(0).toUpperCase()+e.slice(1)

}
console.log(mk('dhoni'));