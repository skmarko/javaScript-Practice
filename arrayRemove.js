let arr =[10,20,30,40,50,60,70];
let limit = 50;
let removeData= function(arr , limit){
for(let i =0 ;i<arr.length;i++){

    if(arr[i]>=limit){
return arr.slice(0,i)
    }
    
}
return arr.slice(i)
}
let result = removeData(arr,limit)
    console.log(result);


    let arr1 = [1,2,3,4,5,6,7,9]
   
    let limit1= 5;
let remov= function(arr1,limit1){
    let s;
    let res=[];
   
    for(let i =0;i<arr1.length ;i++){
if(arr1[i]<limit1){

    res.push(arr1[i]);
}else{
    s=i
    break;
}
    }
return res;

return arr1.slice(i)
}

let d =remov(arr1,limit1)
console.log(d);