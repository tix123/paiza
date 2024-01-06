let people = Number(lines[0])
let bean_arr = []
for (let i = 0; i < people; i++) {
    bean_arr.push(0)
}
let age_arr = []
let command_start = 0
for (let i = 1; i <= people; i++) {
    age_arr.push(Number(lines[i]))
    if (i === people) {
        command_start = i + 1
    }
}

let command = Number(lines[command_start])

for (let i = command_start + 1; i <= command + command_start; i++) {
    let command_arr = lines[i].split(" ")
    for (let j = Number(command_arr[0]) - 1; j < Number(command_arr[1]); j++) {
        bean_arr[j] += Number(command_arr[2])
        if (bean_arr[j] > age_arr[j]) {
            bean_arr[j] = age_arr[j]
        }
    }
}

lines[0] = ""

for (let i = 0; i < people; i++) {
    lines[0] = lines[0] + bean_arr[i] + "\n"
}