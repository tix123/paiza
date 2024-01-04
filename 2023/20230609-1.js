let input = [
    "2",
    "AB",
    "BA"
]

// const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n = parseInt(input[0]);
const S = input[1].split('').sort().toString();
const T = input[2].split('').sort().toString();

if (S === T) {
  console.log("Yes");
} else {
  console.log("No");
}