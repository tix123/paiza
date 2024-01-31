lines[0] = Number(lines[0]) * Math.ceil(Number(lines[1]) / 30)


let arr = lines[2].split(" ")

lines[0] =  arr.includes(lines[0]) ? "Yes" : "No"