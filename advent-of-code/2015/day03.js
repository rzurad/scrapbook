#!/usr/bin/env node

const fs = require('fs');

const coord = {
    x: 0,
    y: 0,
    toString() { return `${this.x}x${this.y}`; }
};

const map = { [coord]: 1 };

function isValidMove(move) {
    return move === '>' || move === '<' || move === '^' || move === 'v';
}

fs.readFile('./day03.data', 'utf8', (err, data) => {
    if (err) throw err;

    for (let i = 0; i < data.length; i++) {
        const move = data[i];

        if (isValidMove(move)) {
            switch (move) {
                case '>': coord.x++; break;
                case '<': coord.x--; break;
                case '^': coord.y++; break;
                case 'v': coord.y--; break;
                default: console.error('wtf?');
            }

            if (!map[coord]) {
                map[coord] = 1;
            } else {
                map[coord]++;
            }
        }
    }

    console.log(Object.keys(map).length);
});
