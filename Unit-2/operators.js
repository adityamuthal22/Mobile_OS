https://replit.com/@Arjun-Thakur1/W2D1comparisionrelationaloperators#index.js

// greater than 
// less than

var height_of_a=4;
var height_of_b=3;

console.log(height_of_a < height_of_b);

//greater than or equal to >=


var minimum_age_to_vote= 18;

var age_of_rupak= 20;
console.log("can rupak vote?");
console.log(age_of_rupak >= minimum_age_to_vote);

var age_of_om=18;
console.log("can Om vote?");
console.log(age_of_om >= minimum_age_to_vote);

var age_of_shaili=17;
console.log("can Shaili vote?");
console.log(age_of_shaili >= minimum_age_to_vote);

//less than or equal to <=
var max_age_at_masai=28;
var your_age=25;
console.log("eligible for Masai School");
console.log(your_age <= max_age_at_masai )



// double equals 
var x=5;
var y=5;
var z=0;
console.log(x==y);


console.log("55" == 55); // ignore the data type : true;
console.log("55" === 55);// data type are different: false;

console.log(55 == 55); // compare values, ignore data types: true
console.log(55 === 55); // compare data type and values =true
console.log("55" === "55");  //true


console.log( 10 !== 10); //false
console.log( "10" !== 10); //true
// is the variable on left (string 10) not having the same value and
// same data type as the value on the right number 10)