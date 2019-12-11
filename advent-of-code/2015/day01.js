#!/usr/bin/env node

const fs = require('fs');

fs.readFile('./day01-1.data', 'utf-8', (err, data) => {
    if (err) throw err;

    let floor = 0;
    let triggered = false;

    for (let i = 0; i < data.length; i++) {
        const char = data[i];

        switch(char) {
            case '(': floor++; break;
            case ')': floor--; break;
        }

        if (!triggered && floor === -1) {
            triggered = true;
            console.log("Santa has entered the basement at position:", i + 1);
        }
    }

    console.log(floor);
});
