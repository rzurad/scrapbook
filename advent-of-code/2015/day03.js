#!/usr/bin/env node

const fs = require('fs');

class Coord {
    constructor() {
        this.x = 0;
        this.y = 0;
    }

    toString() {
        return `${this.x}x${this.y}`;
    }
}

const scoord = new Coord();
const rcoord = new Coord();

const map = { [scoord]: 2 };

function isValidMove(move) {
    return move === '>' || move === '<' || move === '^' || move === 'v';
}

fs.readFile('./day03.data', 'utf8', (err, data) => {
    if (err) throw err;

    for (let i = 0; i < data.length; i++) {
        const move = data[i];
        const coord = i % 2 ? scoord : rcoord;

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
