lines[0] = Number(lines[0]) * Number(lines[1]) *3

let total = Number(lines[1]) +Number(lines[2]) + Number(lines[3])+ Number(lines[4]) + Number(lines[5])+ Number(lines[6]) + Number(lines[7])

lines[0] = total > Number(lines[0]) ? Number(lines[0]): total

let arr1 = lines[0].split(" ")
let arr2 = lines[1].split(" ")

if(Number(arr2[0]) > Number(arr1[0])) {
    lines[0] = "No"
} else if(Number(arr2[0]) < Number(arr1[0]))  {
    lines[0] = "Yes"
} else {
    if(Number(arr2[1]) <= Number(arr1[1])){
        lines[0] = "Yes"
    } else {
        lines[0] = "No"
    }
}