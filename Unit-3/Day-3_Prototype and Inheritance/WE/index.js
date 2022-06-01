// const student ={
//     unit:3,
//     batch:"web 17",
//     instructor:"sk",

// }

// const s1= Object.create(student)
// const s2= Object.create(student)
// const s3= Object.create(student)

//constructor function using prototype

function Student(n,u){
    (this.name=n),(this.unit=u);
}


// Student.prototype.course="fswd";

let s1=new Student("sabar",3);
// console.log("s1:",s1);
