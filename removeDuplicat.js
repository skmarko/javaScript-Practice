//   Remove Duplication of Array

let arr= ['mk','sk','dk','mk',50,60,50]
const remove= ()=>{
    return [...new Set(arr)]
}

console.log(remove(arr))
