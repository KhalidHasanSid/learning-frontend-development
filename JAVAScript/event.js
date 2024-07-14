/*let a=document.querySelector("#p1").innerText="now i have the content of paragraph";

console.log(a.innerText);
console.log(a.innerHTML);*/
let btn=document.querySelector("#btn1");
btn.addEventListener("click",(e)=>{console.log("i love Warda 1")});
let handler1=(e)=>{
    console.log("i love warda 22222");

}

let handler2=(e)=>{
    console.log("i love warda 333333");

}
btn.addEventListener("click",handler1);
btn.addEventListener("click",handler2);
btn.removeEventListener("click",handler1);
