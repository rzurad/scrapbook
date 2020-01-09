#!/usr/local/bin node

/*
--- Day 5 ---
--- Part Two ---
Realizing the error of his ways, Santa has switched to a better model of
determining whether a string is naughty or nice. None of the old rules
apply, as they are all clearly ridiculous.

Now, a nice string is one with all of the following properties:

    It contains a pair of any two letters that appears at least twice in
    the string without overlapping, like xyxy (xy) or aabcdefgaa (aa),
    but not like aaa (aa, but it overlaps).

    It contains at least one letter which repeats with exactly one letter
    between them, like xyx, abcdefeghi (efe), or even aaa.
    
For example:

    qjhvhtzxzqqjkmpb is nice because is has a pair that appears twice (qj)
    and a letter that repeats with exactly one letter between them (zxz).
    
    xxyxx is nice because it has a pair that appears twice and a letter
    that repeats with one between, even though the letters used by each rule
    overlap.

    uurcxstgmygtbstg is naughty because it has a pair (tg) but no repeat
    with a single letter between them.

    ieodomkazucvgmuy is naughty because it has a repeating letter with one
    between (odo), but no pair that appears twice.

How many strings are nice under these new rules?
*/
const fs = require('fs');
const readline = require('readline');

const readInterface = readline.createInterface({
    input: fs.createReadStream('./day05.data'),
    output: null,
    console: false
});

let nice = 0;
let naughty = 0;

readInterface.on('line', function (line) {

});

readInterface.on('close', function () {
    console.log('nice:', nice);
    console.log('naughty:', naughty);
});
