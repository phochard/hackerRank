'use strict';

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



function main() {
    const n = parseInt(readLine(), 10);

    const binaryNumber = n.toString(2).split(0);

    const countArrayLength = binaryNumber.map(number => number.length);
    countArrayLength.sort(function(a, b) { return a - b })

    const maxLength = countArrayLength.slice(-1)[0]
    console.log(maxLength)
}