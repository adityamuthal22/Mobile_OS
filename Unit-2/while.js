// print 5 times masai school
/*
var i =1;
while(i<=5){
    console.log("Masai School");
    i++;

}


//print value 1 to 5

var i=1;
while(i<=5){
    console.log(i);
    i++;

}

//print min to max excluding max value

var min=12;
var max=20;
while(min<max){
    console.log(min);
    min++;
}

//print multiplication table of n
var n =2;
var i=1;
var a=0
while(i<=10){
             a=n*i; 
            console.log(a);
            i++;

        }

// print num given but odd number

var num=12;
var i=1;
while(i<=num){
    if(i%2==1){
        console.log(i);
    }
    i++;
}



// print num is given but print odd number

var num=12;
var i=1;
while(i<=num){
    if(i%2==0){
        console.log(i);
    }
i++;
}


//sum of even number

function isPrime( n)


{
    // since 0 and 1 is not prime return false.
    if(n == 1 || n == 0) return false;
 
    // Run a loop from 2 to n-1
    for(var i = 2; i < n; i++)
    {
     
      // if the number is divisible by i, then n is not a prime number.
      if(n % i == 0) return false;
    }
    // otherwise, n is prime number.
    return true;
}
var N = 100;
 
// check for every number from 1 to N
  for(var i = 1; i <= N; i++)
  {
      // check if current number is prime
      if(isPrime(i)) {
        console.log( i );
      }
}

//sum of even number
var num=6
var sum=0;
var i=1;
while(i<=num){
    if(i%2 == 0){
        sum = sum +i;
    }
    i++;
}
console.log(sum);
*/
//sum of odd number
var num=3;
var sum=0;
var i=1;

while(i<=num){
    if(i%2 == 1){
        sum = sum + i; 
    }
    i++;
}
console.log(sum);







