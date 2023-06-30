// let total = lines[1]
// let num = lines[0]

let lines = []
// lines[0] = 5;

lines[0] = "4 3"
lines[1] ="2556 3424 77"
lines[2] =137
lines[3] =721
lines[4] =984
lines[5] =999

let arr1 = lines[0].split(" ")
let arr2 = lines[1].split(" ")

let store = arr1[0]
let month = arr1[1]

let stroe_fee = arr2[0]
let man_fee = arr2[1]
let ranmen_fee = arr2[2]
lines[0] =0
for ( let i=2; i < store+2; i++){
let result=lines[i]*ranmen_fee - stroe_fee - man_fee*month
if (result < 0 ) {
lines[0]++
}
}

console.log("lines[0]", lines[0])