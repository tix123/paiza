if (Number(lines[0]) >= 1000) {
    lines[0] = "Yes"
} else {
    lines[0] = "No"
}

// let arr = lines[0].split("")
let cnt = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "A") {
        cnt += 1
    }
}
lines[0] = cnt

if (lines[0] === "A") {
    lines[0] = 10
} else if (lines[0] === "B") {
    lines[0] = 11
} else {
    lines[0] = Number(lines[0])
}

// let arr = lines[0].split(" ");
let s = ""
for (let i = 0; i < arr[0]; i++) {
    s += "A"
}
for (let i = 0; i < arr[1]; i++) {
    s += "B"
}
for (let i = 0; i < arr[2]; i++) {
    s += "A"
}
lines[0] = s



Number(lines[0])
let arr = lines[1].split("");
for (let i = 0; i < Number(lines[0]); i++) {
    lines[i] = arr[i]
}


