let current="light";
let bg=document.querySelector("body");
btn=document.querySelector("#btn");
btn.addEventListener("click",(e)=>{
    if(current==="light"){
        current="dark";
        console.log(current);
        bg.classList.add("dark");
        bg.classList.remove("light");

        
    }
    else{
        current="light";
        console.log(current);
        bg.classList.add("light");
        bg.classList.add("dark");

    }
})