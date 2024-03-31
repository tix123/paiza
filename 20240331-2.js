
let result = 0
for (let i = 1; i <= Number(lines[0]); i++) {
    if (lines[i] === "G C" || lines[i] === "C P" || lines[i] === "P G")
        result++
}

lines[0] = result