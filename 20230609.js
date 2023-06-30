arr = lines[0].split(" ")
lines[0] = arr[1]+" "+arr[0]

lines[0] = lines[0] * 1.5

let arr = lines[0].split(" ")
result1 = arr[0]-lines[1]
result2 = arr[1]-lines[1]
lines[0] = result1.toString() + " " + result2.toString()


let arr = lines[0].split("")
lines[0] = ""
for ( let i=arr.length-1; i>=0; i--){
lines[0] += arr[i] 
}

let arr = lines[0].split(" ")
lines[0] = arr[0].substring(0,1) +"." + arr[1].substring(0,1)


let arr = lines[0].split(" ")
lines[0] =0
for ( let i=1; i<arr[0]; i++){
if(Number(lines[i]) <= Number(arr[1])){
lines[0]+=Number(lines[i])
}
}


lines[0] = 100 + Number(lines[0]) * Number(lines[1])
lines[0] = lines[0] + "A"
lines[0] = lines[0].substring(0, 1) + lines[0].substring(lines[0].length-1, lines[0].length )

let arr = lines[0].split(" ")
let score1 = Number(arr[0])
let score2 =  Number(arr[1])
let limit = Number(lines[1])

if(score1>=limit){
    lines[0] = score1+ score2
} else {
    lines[0] = score1
}