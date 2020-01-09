#!/usr/bin/env node

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get
3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/
const max = 10;
let total = 0;

for (let i = 0; i < max; i++) {
    if (!(i % 3) || !(i % 5)) {
        total += i;
    }
}

console.log(total);
