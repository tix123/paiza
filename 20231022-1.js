let lines = [
    "2 3",
    "400",
    "410",
    "420",
    "400",
    "400",
    "400",
    "300",
    "300",
    "300"
]

let people = Number(lines[0].split(" ")[0])
let songLength = Number(lines[0].split(" ")[1])

let max = 0

for (let i = 1; i <= people; i++) {
    let score = 100
    for (let j = 1; j <= songLength; j++) {
        let minus = 0
        let miss = Math.abs(Number(lines[j]) - Number(lines[j + songLength * i]))
        if (miss > 30) {
            minus = 5
        } else if (miss > 20) {
            minus = 3
        } else if (miss > 10) {
            minus = 2
        } else if (miss > 0) {
            minus = 1
        }
        score = score - minus

    }
    if (score > max) {
        max = score
    }
}

lines[0] = max

console.log("result",lines[0])
console.log("score",score)
console.log("people",people)
console.log("songLength",songLength)