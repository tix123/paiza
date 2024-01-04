let arr = lines[0].split(" ");


let max =0
for (let i = 0; i < arr.length; i++){
if(arr[i]> max){
    max = arr[i]
}
}
lines[0] = max


if(lines[0] === "candy" || lines[0] === "chocolate"){
    lines[0] = "Thanks!"
} else {
    lines[0] = "No!"
}

lines[0] = Math.ceil(24 / Number(lines[0]))

if(arr[1]==="M"){
    lines[0] = "Hi, Mr. " + arr[0]
}

if(arr[1]==="F"){
    lines[0] = "Hi, Ms. " + arr[0]
}

for (let i = 0; i < arr.length; i++){
    if(Number(arr[i])>5){
        arr[i] =5
    } else {
        arr[i] =Number(arr[i])
    }
}
lines[0] = arr[0] + arr[1]


if(cnt>=5){
    lines[0] = "yes"
} else {
    lines[0] = "no"
}

if(arr[0]==="2"){
    lines[0] = "ok"
} else if (arr[0]==="4"){
    lines[0] = "error"
} else {
    lines[0] = "unknown"
}

if(Number(arr[0])<=Number(arr[1])){
    lines[0] = Number(arr[1]) - Number(arr[0])
} else {
    lines[0] = "No"
}

if(Number(arr[0])+Number(arr[1])>=16){
    lines[0] = "STAND"
} else {
    lines[0] = "HIT"
}

lines[0] = 60- Number(lines[0])