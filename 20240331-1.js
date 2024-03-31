let lines = []

lines[0] = "--PA-I---ZA"


let result = ""
let hasDash = false
for (let i = 0; i < lines[0].length; i++) {
    if (lines[0].charAt(i) !== "-") {
        result = result + lines[0].charAt(i)
        hasDash = false
    } else if (lines[0].charAt(i) === "-" && !hasDash) {
        result = result + lines[0].charAt(i)
        hasDash = true
    }
}

lines[0] = result

console.log(lines[0])