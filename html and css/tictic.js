
let turn=true;
let btn=document.getElementsByClassName("btn");
console.dir(btn);
let reset=document.getElementById("rest");
winpattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let winner=document.createElement("h2");

for(let i=0;i<btn.length;i++){
  btn[i].addEventListener("click",()=>{
    if(turn===true)
        {
           btn[i].innerHTML="O";
           turn=false;
           btn[i].disabled=true;
        }
        else{
            btn[i].innerHTML="X";
            turn=true;
            btn[i].disabled=true;
        }
        checkwinner();
  })
};
function checkwinner(){
 for(let pattern of winpattern){
  let pos1=btn[pattern[0]].innerText;
  let pos2=btn[pattern[1]].innerText;
  let pos3=btn[pattern[2]].innerText;
  if(pos1!=""&& pos2!=""&& pos3!=""){
    if((pos1===pos2)&& (pos2===pos3)){
      if(turn===true){
        disable();
      
       winner.innerText="PLAYER 2 WON";
       winner.style.width="50%";
       winner.style.color="white";
       winner.style.backgroundColor= "blue";
       winner.style.position="relative";
       winner.style.top="30%";
       let bdy=document.getElementById("bo");
       bdy.prepend(winner);


      }
      else{
        disable();
        
        winner.innerText="PLAYER 1 WON";
        winner.style.width="50%";
        winner.style.color="white";
        winner.style.backgroundColor= "blue";
        winner.style.position="relative";
        winner.style.top="30%";
        let bdy=document.getElementById("bo");
        bdy.prepend(winner);

      }

    }
  }

 }

  }

  reset.addEventListener("click",()=>{
    for(let j=0;j<btn.length;j++){
      btn[j].disabled=false;
      winner.remove();

      btn[j].innerText="";
    }
  });
  function disable(){
    for(let j=0;j<btn.length;j++){
      btn[j].disabled=true;
  }}


