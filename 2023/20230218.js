let arr = lines[0].split(" ")
lines[0] = Number(arr[0]) - Number(arr[1])
let total = Number(arr[0])
let prizeA = Number(arr[1])
let prizeB = Number(arr[2])

lines[0] = ""
for ( let i=1; i<=total; i++)
{
if(i%prizeA == 0){lines[0] += "A" }
if(i%prizeB == 0){lines[0] += "B" }
if(i%prizeA != 0 && i%prizeB !=0){lines[0] += "N" }
lines[0] += "\n"

}

lines[0] = 
lines[0] == "chocolate" ? lines[1]*2 : lines[1]*5

lines[0] == 3 ? "C" :
lines[0] == 2 ? "D" :
lines[0] == 1 ? "E" 

lines[0] = lines[0].split("").reverse().join("")

if(lines[0] == "S") {
lines[0] = Number(lines[1]) + 1925
} else if(lines[0] == "H"){
lines[0] = Number(lines[1]) + 1988
} else {
lines[0] = "rainy"
}
let result=0
for(let i=1;i<=Number(lines[0]);i++){
result += Number(lines[i])
}
lines[0] = result

let arr = lines[1].split(" ")
lines[0] = arr[Number(lines[0])-1]
