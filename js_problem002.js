var newprogram = 'This is 002 of code euclid!'
console.log(newprogram);

var sum = 0;
var end = 4000000;

var fib = [];
fib[0] = 0;
fib[1] = 1;

for (i = 2; i < 100; i++){
    if (fib[i-2] + fib[i-1] > end){
        break;
    }
    fib[i] = fib[i-2] + fib[i-1];
}

for (j = 0; j < fib.length; j++){
    if (fib[j] % 2 == 0){
        //console.log(fib[j]);
        sum = sum + fib[j];
    }
}

console.log(sum);