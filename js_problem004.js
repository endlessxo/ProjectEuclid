var newprogram = 'This is 004 of code euclid!'
console.log(newprogram);

//Find the largest palindrome made from the product of two 3-digit numbers.

var begin = 100;
var end = 999;
var bigPalindrome = 0;
var test;

for (i = begin; i < end; i++) {
    for (j = begin; j < end; j++) {
        test = i * j;
        if (reverse(test.toString()) == test.toString() && test > bigPalindrome) {
            bigPalindrome = test;
        }
    }
}

function reverse(s) {
    return s.split("").reverse().join("");
}


console.log(bigPalindrome);