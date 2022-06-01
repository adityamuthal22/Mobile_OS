//replit link
//https://replit.com/@Arjun-Thakur1/conditional-statements-web17-A#index.js
var x = 5;
var y = 3;

//

//algo to print the bigger value out of the two given numbers

//start
//comapre values of x and y
// if x is bigger print x
//else if y is bigger print y
//end


//We learnt two types of conditional statements:

//type 1: if-else

if(x > y){   // {} are called curly brackets/braces

    // anything inside {} is called a code block
    console.log(x);
    console.log("x is bigger")
}

else{  //else: read it as "otherwise" or "or"
    console.log(y);
}
//curly brackets are used in if else conditional statements.



//type 2: if 
var completion_percentage = 100;

//if the completion_percentage is 100 than print "finished" else do nothing
if(completion_percentage == 100){
    console.log("finished.");
}





var is_it_raining=true;
// go out on a long drive if it raining, else do nothing
if(is_it_raining == true){
    console.log("go out on a long drive ");
}

//type 3: if-if-if
// get all the items that are available
var rice_available= true;
var wheat_available = true;
var apple_available = false;

if(rice_available){ // if the condition is true, the block will be executed/running
    console.log("buy rice"); //be printed
}
if(wheat_available){
    console.log("buy wheat ");//be printed
}
if(apple_available){ //block is not executed/run, ignored
    console.log("buy apple");
}


//Type 4: if-else-if aka if else ladder

//buy any one item available in the market
if(rice_available){ 
    console.log("buy rice"); 
}
else if(wheat_available){
    console.log("buy wheat");
}
else if(apple_available){
    console.log("buy apple");
}
else{
    console.log("nothing available");
}

// not operator !
// if a user has admin access print "welcome" otherwise print "access denied".
//without not operator
var admin_access = true;

if(admin_access){
    console.log("welcome");
}
else
{
    console.log("access denied");
}

//with the not operator

if(!admin_access){ // not true = false
console.log("access denied");
}
else{
    console.log("welcome");
}

//another example  with only one if
var snow=true;
var nosnow=false;

if(snow){
    console.log("play");
}

//use not operator and nosnow
if(!nosnow){
    console.log("play");
}

//remember no is same is not operator !
// there is no as well as ! operator, they cancel eath other out. Just like in -1 multiplied by -1 
// -1 X -1 =  +1
// ! nosnow = snow


