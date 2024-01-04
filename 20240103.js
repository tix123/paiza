lines[0] = Number(lines[0]) + 2

if (lines[0] > 12)
    lines[0] = lines[0] - 12


let questions = Number(lines[0])
let result = ""
let cnt = 0
for (let i = 1; i <= questions; i++) {
    let answer = lines[i].split(" ")
    if (answer[0] === "n" || answer[1] === "n") {
        result = result + i + "\n"
        cnt++
    }
}

lines[0] = cnt + "\n" + result