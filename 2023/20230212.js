lines[0] = Number(lines[0]) *Number(lines[0])*6
lines[0] = Number(lines[0]) *100
lines[0] = 180- Number(lines[0]) - Number(lines[1])-120 
lines[0] = Number(lines[0]) +170
lines[0] = lines[0] + "-" +  lines[1]+ "-" +lines[2]
lines[0] = Number(lines[1])%Number(lines[0])
lines[0] = 100-Number(lines[0]) /2
lines[0] = Math.floor(Number(lines[0])/2) 
lines[0] = Number(lines[0]) /180+2
lines[0] = lines[0] + "/" + lines[1] + "/"+ lines[2] 
lines[0] = Math.abs(Number(lines[0]))
lines[0] = Number(lines[0]) *Number(lines[1]) *Number(lines[1]) 
lines[0] = lines[1].substring(0,Number(lines[0]))
let length = lines[0].length

if(lines[0].length == lines[1].length){
lines[0] ="Yes"
}
else{
lines[0] ="No"
}

let arr = lines[1].split(" ")
lines[0] = (arr[0]*arr[1])%lines[0]
lines[0] = Math.pow(2, Number(lines[0]))
lines[0] = 10 - lines[0].length
if(Number(lines[0]) == Number(lines[1]) == Number(lines[2]){
lines[0] == "Yes"
} else {
lines[0] == "No"
}


lines[0] = Number(lines[0]) + Number(lines[1]) + Number(lines[2])
