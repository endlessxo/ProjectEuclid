var newprogram = 'This is 001 of code euclid!'
//Find the sum of all the multiples of 3 or 5 below 1000.
console.log(newprogram);

var sum = 0;
var start = 0;
var end = 1000;
while (start < end){
    if (start % 3 == 0 || start % 5 == 0){
        sum = sum + start;
    }
    start++;
}

console.log(sum);