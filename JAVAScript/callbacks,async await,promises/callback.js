function sum(a,b){
    console.log(a+b)
}

function cal(a,b,vb){
    console.log(a+b)
    vb(a,b);
    
}
sum(7,7)
cal(9,10,sum)