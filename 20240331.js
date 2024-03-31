
let arr = lines[1].split(" ")
lines[0] = Number(arr[0]) + Number(arr[1]) + Number(arr[2]) > Number(lines[0]) ? "NG" : "OK"

let arr = lines[0].split(" ")
lines[0] = Number(arr[0]) + Number(arr[1])

lines[0] = Math.floor(Number(lines[1]) / Number(lines[0]))

let arr = lines[0].split(" ")
lines[0] = Number(arr[0]) - Number(arr[1])
if (lines[0] < 0) lines[0] = 0

lines[0] = Number(lines[0]) >= 8 ? "OK" : "NG" 