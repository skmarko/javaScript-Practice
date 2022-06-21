let arry = [1,2,3,5,6,0,-1,-2, -3, -4];

let myArry=[]

let myData= (element)=>{

    if(element< 0){
        return true;
    }
    else{
        return false;
    }
}

arry.forEach(element=>{
    if(myData(element)===false){
        return myArry.push(element)
    }
})
console.log(myArry);
