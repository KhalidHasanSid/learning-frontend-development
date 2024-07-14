const URL="https://cat-fact.herokuapp.com/facts";

let facts= async ()=>{
    console.log("GETTING DATA....")
    let response= await fetch(URL);
    console.log(response);
   let d= await response.json()
   console.log(d[0].text)
}