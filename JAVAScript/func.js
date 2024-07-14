//foreach function 
let arr=["khalid","asif","ahsan"];
arr.forEach((item,idx)=>{
   console.log(item,idx)
});
//filter function
let arr2=[1,2,3,4,5,6,7,8,9];
let number=arr2.filter((val)=>{
 return val%2===0;
});

console.log(number);

//reduce method 
let arr3=[65,78,88,50,51,97,60,73,71,79,46,83];
let a=arr3.reduce((avg,pv)=>{
    let sum=pv+avg;
  return sum/arr3.length;



});
console.log(a);