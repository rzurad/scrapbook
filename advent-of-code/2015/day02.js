#!/usr/bin/env node

const readline = require('readline');
const fs = require('fs');

const readInterface = readline.createInterface({
    input: fs.createReadStream('./day02-1.data'),
    output: null,
    console: false
});

let total = 0;
readInterface.on('line', function (line) {
    const {
        '0': l,
        '1': w,
        '2': h
    } = line.split('x').map((str) => Number(str));

    const a = l * w;
    const b = w * h;
    const c = h * l;
    const smallest = Math.min(a, b, c);

    total += (2 * a) + (2 * b) + (2 * c) + smallest;
});

readInterface.on('close', function () {
    console.log(total);
});
