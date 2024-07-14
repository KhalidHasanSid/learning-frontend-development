/*let prom= new Promise((resolve,reject)=>{
    console.log("i am a promise ");
})*/

function getID(id, nextID){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("ID number ",id);
        if(nextID){
            nextID();
        }
       },6000) 
        
      

    })
}


