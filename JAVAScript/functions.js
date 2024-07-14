function sum(a,b){
    let s=a+b;
    return s;
}
function subtract(a,b){
    let sub=a-b;
    return sub;
}
function multiply(a,b){
    let mul=a*b;
    return mul;
}
function divide(a,b){
    let div=a/b;
    return div;
}
let num=prompt("enter a number ");
if(num<10){
    console.log("you can do sum");
    let a=prompt("a");
    let b=prompt("b");
   console.log(sum(a,b));
}
else if(num>10&&num<20){
    console.log("you can do multiply");
    let a=prompt("a");
    let b=prompt("b");
  
}
else{
    if(num<10){
        console.log("you can do divivde");
        let a=prompt("a");
        let b=prompt("b");
       console.log(divide(a,b));
    }
}