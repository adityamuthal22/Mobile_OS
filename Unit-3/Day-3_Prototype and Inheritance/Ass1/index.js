
//***********************by using object create****************** */
let tata={
    model:"cedan",
    Trust:true,
    safety:true,
    Reliable:true,
};

let T1=Object.create(tata);
T1.varient1="Altroz";

let T2=Object.create(T1);
T2.varient2="Nexon";
console.log("T2:",T2);

//***********************by using constructor function****************** */

function tataT(v,p){
    this.model1="cedan";
    this.Trust1=true;
    this.varient11=v;
    this.price=p;


}

tataT.prototype.coupon=function(){
    console.log("20% discount on this varient");
}


let s1=new tataT("Nexon",12000000);
console.log("s1:",s1);

s1.coupon();
