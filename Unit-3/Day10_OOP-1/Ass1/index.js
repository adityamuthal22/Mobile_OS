//OOPS CONCEPTS
// Problem 1:
// Build an inheritance model of your family tree using class constructor.
// Build an inheritance model of cat family using class constructor.

class Family{
    constructor(n,s){
        this.name=n;
        this.member=4;
        this.surname;
    }
}
class grandfather extends Family {
    constructor(n,s){
        super(n,s);

        this.headfamily=true;
    }

}
class father extends grandfather{
    constructor(n,s,value){
        super(n,s);

        this.farmer=value;
    }
}
let s1=new father("Sudhakar","Muthal",true);
console.log("s1:",s1);