#!/usr/bin/env node

const readline = require('readline');
const fs = require('fs');

const readInterface = readline.createInterface({
    input: fs.createReadStream('./day02-1.data'),
    output: null,
    console: false
});

let totalPaper = 0;
let totalRibbon = 0;

readInterface.on('line', function (line) {
    const {
        '0': l,
        '1': w,
        '2': h
    } = line.split('x').map((str) => Number(str));

    const p1 = l * 2 + w * 2;
    const p2 = w * 2 + h * 2;
    const p3 = h * 2 + l * 2;
    const smallestPerimeter = Math.min(p1, p2, p3);

    const a = l * w;
    const b = w * h;
    const c = h * l;
    const smallestArea = Math.min(a, b, c);
    const volume = l * w * h;

    const paper = (2 * a) + (2 * b) + (2 * c) + smallestArea;
    const ribbon = volume + smallestPerimeter;

    totalPaper += paper;
    totalRibbon += ribbon;

    console.log(`${l}x${w}x${h}`, paper, ribbon);
});

readInterface.on('close', function () {
    console.log(totalPaper);
    console.log(totalRibbon);
});
