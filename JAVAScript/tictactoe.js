let turn=true;
let btn=document.getElementsByClassName("btn");
winnpatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[2,5,8],[1,4,7],[0,4,8],[2,4,6]];

console.dir(btn)
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener("click",()=> {
        if(turn){
            turn=false;
            btn[i].innerText="O";
        }
        else{
            turn=true;

            btn[i].innerText="X";

        }
        btn[i].disabled=true;

        chk_winner();
    });
    
};
function chk_winner(){
    for(let p of winnpatterns){
       
        console.log(btn[p[0]],btn[p[1]],btn[p[2]]);
        let v0=btn[p[0]].innerText;
        let v1=btn[p[1]].innerText;
        let v2=btn[p[2]].innerText;
        if(v0!=""&& v1!="" && v2!=""){
            if(v0===v1&&v1===v2){
                if(turn==true){
                    console.log("player 2 won");
                }
                else{
                    console.log("player 1 won");
                }
            }
        }
    }
}