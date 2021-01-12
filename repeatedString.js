'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

//  answer starts here :
function repeatedString(s, n) {

    let counter = 0;

    const repetitionOfS = Math.floor(n / s.length);

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            counter++;
        }
    }
    counter *= repetitionOfS;

    const remainingLetters = n - s.length * repetitionOfS
    for (let i = 0; i < remainingLetters; i++) {
        if (s[i] === 'a') {
            counter++;
        }
    }

    return counter
}
//  end of answer

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}