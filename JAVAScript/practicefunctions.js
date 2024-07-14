function check_vowels(str){
    let count=0;
    for(let  i of str){
        if(i==="a"||i==="b"){
        
         count++;
    }
    }
    return count;
}
let chk=check_vowels("ababA");
console.log(chk)
