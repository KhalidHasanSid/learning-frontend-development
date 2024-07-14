function getdata(id){
   return new Promise((resolve,reject)=>{setTimeout(()=>{
    console.log("data",id)
    resolve(200);
},10000)}); 
}

async function gettingdata(){
    console.log("getting data 1.....")
    await getdata(1);
    console.log("getting data 2.....")
    await getdata(2);
    console.log("getting data 3.....")
    await getdata(3);
}