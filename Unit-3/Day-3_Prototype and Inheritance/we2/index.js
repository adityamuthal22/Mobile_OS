function shoes(b,p){
    this.brand=b;
   this.seller="filpcart";
    this.price=p;
}

shoes.prototype.coupon=function(){
    console.log("20% discount on this products");

};


let s1 =new shoes("nike",3000);

console.log("s1:",s1);

s1.coupon();