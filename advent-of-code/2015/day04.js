#!/usr/bin/env node

const md5 = require('md5');

const input = 'iwrupvqb';
const pattern = '000000';

let number = -1;
let hash;

do {
    number++;
    hash = md5(input + number.toString());

    console.log(`testing ${number}: ${hash}`);
} while (!hash.startsWith(pattern));

console.log(number);
