
// 1)Inheritence using Super------>

class Car{
    constructor(n,b){
        this.name=n;
        this.wheels=4;
        this.brand=4;
    }
}

class Sedan extends Car {
    constructor(n,b){
        super(n,b);

        this.sunroof=true;
    }
}

class ElecticSedan extends Sedan{
    constructor(n,b,value){
        super(n,b);

        this.electric =value;
    }
}

let s1=new ElecticSedan("verna","Hyundai",true);
console.log("s1:",s1);
// *******************************************************************************************

// 2)Encapsulation------>

// class Employee{
//     constructor(n,r){
//         // this.name=n;
//         // this.rating=r;
//         let name;
//         let rating;
//     }
//     getName(){
//         return this.name;
//     }
//     setName(value){
//         this.name=value;
//     }
// }

// let e1=new Employee()
   
// e1.setName("pablo");
// console.log(e1.getName());
// *********************************************************************************

// 3) Abstraction--------------------->



