lines[0] = Math.ceil(Number(lines[0]) / Number(lines[1]))

let arr = lines[0].split(" ")
lines[0] = (Number(arr[0]) / 60) * Number(arr[1])
