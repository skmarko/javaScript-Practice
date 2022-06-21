console.log(('Factorial of Given Number'));


let fact=(num)=>{

    if(num==0 || num==1)
        return 1;

        for(var i= num-1;i>=1;i--){
            num*=i //num =num*i
    }
    return num;
}

console.log(fact(5))