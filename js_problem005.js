var newprogram = 'This is 005 of code euclid!'
console.log(newprogram);

//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var numbers = []
for (i = 1; i <= 20; i++){
    numbers[i-1] = i;
}

divisibility = false;
var smallestpositivenumber = 1;

while (divisibility == false){
    for (j = 0; j < 20; j++){
        if (smallestpositivenumber % numbers[j] != 0){
            smallestpositivenumber++;
            j = 0;
        }
    }
    divisibility = true;
}

console.log(smallestpositivenumber);