// print the odd number 
/*
var i = 1;
while(i<=20){
    if(i%2 == 1){
        console.log(i);
    }
    i++;
}

// sum of odd number for given limit
var i=0;
sum=0;
limit=20;

while(i<=20){
    if(i%2 ==1){
        console.log(i);
        sum=sum+i;
    }
    i++;
}
console.log("sum of odd number :",sum);

// sum of even number for given limit
var i=0;
sum=0;
limit=20;

while(i<=20){
    if(i%2 ==0){
        console.log(i);
        sum=sum+i;
    }
    i++;
}
console.log("sum of even number :",sum);

*/
// Problem 4: Print the average of even numbers from 1 to 100 (both included)

var starting = 1;
var ending = 100;
var sum_of_even = 0;
var count_even_numbers = 0;
while(starting<=ending)
{
if(starting%2 == 0){
sum_of_even = sum_of_even + starting;
count_even_numbers++;
}
starting++;
}
var average = sum_of_even/count_even_numbers;
console.log(average);