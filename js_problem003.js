var newprogram = 'This is 003 of code euclid!'
console.log(newprogram);

var num = 600851475143;


function biggestprime(foo) {
    var prime = 2; //because 1 is not a prime number

    if (foo < 1) {
        return 'This is not a valid number';
    } else if (foo <= 3 && foo > 0) {
        return foo;
    }

    while (prime < foo) {
        for (i = 2; i <= foo; i++) {
            if (foo % i === 0) {
                foo = foo / i;
                prime = i;
            }
        }
        return prime;

    }
}
console.log(num);


console.log(biggestprime(num))
