let arr1 = lines[0].split(" ")
lines[0] =  arr1[0]<=15 && arr1[1]>=60 ? "Yes" : "No"

lines[0] = Number(lines[0]) - (Number(lines[1]) + Number(lines[2]))

lines[0] = lines[0] + lines[1]

lines[0] = Number(lines[0]) -(Number(lines[1]) * Number(lines[2]))

let answer = ""

for (let i = 0; i < lines[0].length-1; i=i+2) {
answer = answer + lines[0].charAt(i)
}

lines[0] =answer