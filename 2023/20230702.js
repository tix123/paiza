let arr = lines[1].split("");
let cnt = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === lines[0]) {
cnt++
    }
}
lines[0] = cnt

let price = Number(arr[0])
let old_tax = Number(arr[1])
let new_tax = Number(arr[2])

lines[0] = (price * new_tax - price * old_tax) / 100

if (Number(lines[0]) >= 1000) {
    lines[0] = Math.floor(lines[0] / 10)
} else {
    lines[0] = 0
}