

//for loop


for(var x=0; x<3 ; x++){ 
    console.log("hello");   
    console.log("for loop");
}
//if we have just one statement in the loop body {} are not needed
for(var x=0; x<3 ; x++)
    console.log("for loop");

//printing the loop variable
for(var x=0; x<3 ; x++){
    console.log(x);
}

// Example 3: Print multiple of 2 values from 1 to 10
for(var i=1;i<=10;i++){
    if(i%2==0)  //if we have just one statement in the if body {} are not needed
        {
            console.log(i);
        }
}

//Example 4: Reverse Loop from 5 to 1 => print 54321, 
//condition: don't use increament operator
for(var number=5;number>=1; number--)
    console.log(number);


//Example 5: Factorial
    var number = 5;
    var factorial=1;
for(var x=2;x<=number;x++){             //   x    x<number  x++    factorial
    factorial= factorial*x;  //iteration 1   2    T         3   2
}
console.log(factorial);

//out put formatting
var first_name= "Sravya";
var age= 23;
console.log("my name is ", first_name);
console.log("my age is ", age);

console.log("my name is ", first_name, "my age is ", age);

console.log("factorial of ", number," is ", factorial);

//Code 7 : Loop from 1 to 10 (using break). 
//Using console.log before break statement
//Analogy: Drop guests from home to railway station one by one
//drop the first 5 guests to the station and break after that.
for(var number=1; number<=10;number++){
    if(number==6)
    {
        break; 
    }
    console.log("dropping  ", number, " to the station");
}
//break:
//it will take the control (flow of your program)
// outside the loop body (after the closing curly brackets).
console.log("outside the for loop.");


//another break example.
//school break at 4 pm.
//print all the numbers until break. 1, 2, 3, break....

var break_time=4;
for(var hour=1;hour< 12; hour++){
    console.log(hour);
    if(hour==break_time)
    {
        break;
    }
    

}
console.log("go home");


//suppose guest number 4 is not feeling well.

for(var number=1; number<=10;number++){
    if(number==4){
        //skip, bypass
        continue;
    }
    console.log("dropped guest ", number);
}
//similarity b/n break and continue?
//Both of them send the control out of the loop body

//difference b/n break and continue?
//Break: The end of the loop. It doesn't continue with the loop.
//Continue: Skip/bypass that specific value, in this case 4.It continues the loop.

//printing odd number using continue
for(var number=1; number<=10;number++){
    if(number%2==0){
        //skip, bypass the even numbers
        continue;
    }
    console.log(number);
}


//Code 11 : Predict the output.

var count = 1;
for(var i = 1; i<10; i++)
{
  count++;

  if(i==4){
    continue;
  }
}
console.log(count);

var count = 1; //without if block count will become 4
//with if block it prints 3.
for(var i = 1; i<4; i++)
{
    if(i==2){
        continue;
      }
  count++;
}
console.log(count);


//IW session


// Problem 5 : Move 2 Ahead
// <https://oj.masaischool.com/contest/2708/problem/05>Links to an external site.

//function moveTwoAhead(num) {
    num=10
    for(i=1;i<=num;i++){
        if(i%2==1){
            console.log(i)
        }
    }

    // Problem 9 : Mod of 10 II
// <https://oj.masaischool.com/contest/2708/problem/09>Links to an external site.


//Code 21 :

//for loop
function modeof10(num) {
        
    for(var i = 1; i<=num; i++)
    {
        console.log(i%10);
    }
}

//while loop
//You are given a number stored in a variable with the namenum

//Find out the value obtained from the expression i % 10, 
//whereiconsists of all the values from 1 to the value stored innum, includingnum
function modeoften(num){
    var num=11
    var i=1;
    while(i<=num){
        console.log(i%10);
        i++;
    }
}

//odd sum below n, while loop
var below_this=10; //1, 3, 5, 7,9
var loop_var=0;
var odd_sum=0;
while(loop_var<below_this){
    if(loop_var%2==1){
        odd_sum =odd_sum+loop_var;
    }
    loop_var++;
}
console.log("odd sum below", below_this, " is " + odd_sum);




