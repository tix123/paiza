let arr1 = lines[0].split(" ")
let arr2 = lines[1].split(" ")
let sum1 = Number(arr1[0]) * Number(arr2[1])
let sum2 = Number(arr2[0]) * Number(arr1[1])
lines[0] = sum1- sum2

if(Number(lines[0])>Number(lines[1])) {
lines[0] = Number(lines[0])
} else {
lines[0] = Number(lines[1])
}

if(lines[0] != "paiza" ){
lines[0] = "No"
} else {
lines[0] = "Yes"
}

let arr = lines[0].split(" ")
let target = Number(arr[1])
lines[0] = arr[0].substring(target-1,target)