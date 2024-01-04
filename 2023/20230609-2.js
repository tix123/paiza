// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
// const lines = input.trim().split('\n');
let lines = [
    "###",
    "..#",
    ".#."
];
let bingo=[];
let bingo_line = 0;
bingo.push(lines[0].split(''));
bingo.push(lines[1].split(''));
bingo.push(lines[2].split(''));

// 横ビンゴ
bingo_line += (bingo[0][0] === "#" && bingo[0][0] === bingo[0][1] && bingo[0][1] === bingo[0][2]) ? 1 : 0;
bingo_line += (bingo[1][0] === bingo[1][1] && bingo[1][1] === bingo[1][2]) ? 1 : 0;
bingo_line += (bingo[2][0] === bingo[2][1] && bingo[2][1] === bingo[2][2]) ? 1 : 0;

// 縦ビンゴ
bingo_line += (bingo[0][0] === bingo[1][0] && bingo[1][0] === bingo[2][0]) ? 1 : 0;
bingo_line += (bingo[0][1] === bingo[1][1] && bingo[1][1] === bingo[2][1]) ? 1 : 0;
bingo_line += (bingo[0][2] === bingo[1][2] && bingo[1][2] === bingo[2][2]) ? 1 : 0;

// 斜めビンゴ
bingo_line += (bingo[0][0] === bingo[1][1] && bingo[1][1] === bingo[2][2]) ? 1 : 0;
bingo_line += (bingo[0][2] === bingo[1][1] && bingo[1][1] === bingo[2][0]) ? 1 : 0;

console.log(bingo_line);