function getdata(id,nextdata){

    setTimeout(()=>{    console.log("data",id);
        if(nextdata){
            nextdata();
    }},5000)}
   



getdata(1,()=>{getdata(2)})

