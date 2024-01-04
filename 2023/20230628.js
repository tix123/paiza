let arr = lines[0].split("");

if(arr.length>=11){
    lines[0] = "OK"
} else {
    lines[0] = 11-arr.length
}


let new_arr = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "a" && arr[i + 1] === "t") {
        new_arr.push("@")
        i++
    } else {
        new_arr.push(arr[i])
    }
}
lines[0] = new_arr.join("")

lines[0] = lines[0].split("").reverse().join()


if (lines[0] === "inu" || lines[0] === "saru") {
    lines[0] = "No"
} else {
    lines[0] = "Yes"
}

