function getid(id ,nextid){
    console.log("data",id )
    if(nextid){
        nextid();
    }
}
setTimeout( getid(1,setTimeout(getid(2,setTimeout(getid(3),15000)),10000))
    
, 5000);