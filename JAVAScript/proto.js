const student={
    name:"khalid",
    subject:"business process engineering",
    marks: 21,
    out_of:30,
    percentage: function(){
       let per= this.marks/this.out_of *100;
       console.log("percentage contributed in this subject:",per);
    }

    
}