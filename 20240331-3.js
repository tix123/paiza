let lines = []

lines[0] = "5A9B"



let result = ""
for (let i = 0; i < lines[0].length; i++) {
    if (lines[0].charAt(i).match(/^[A-Z]*$/)) {
        let code = lines[0].charCodeAt(i)
        code++
        if (code > 90) {
            code = 65
        }
        result = result + String.fromCharCode(code)
    } else {
        let num = ""
        for (let j = i; j < lines[0].length; j++) {
            if (lines[0].charAt(j).match(/^[A-Z]*$/)) {
                break
            } else {
                num = num + lines[0].charAt(j)
                i = j
            }
        }
        result = result + (Number(num) + 1)
    }
}

lines[0] = result


console.log(lines[0])