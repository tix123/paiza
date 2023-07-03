// let arr1 = lines[0].split("");
// let arr2 = lines[1].split("");

// if (arr1.length === arr2.length) {
//     lines[0] = "Yes"
// } else {
//     lines[0] = "No"
// }


// let arr = []
// let not_repeated = true
// let times = 0

// for (let i = 0; i < Number(lines[0]); i++) {
//     arr.push(0)
// }

// while (not_repeated) {
//     if (arr[(Number(lines[1]) * times) % Number(lines[0])] === 0) {
//         arr[(Number(lines[1]) * times) % Number(lines[0])] = 1
//         times++
//     } else {
//         not_repeated = false
//     }
// }

// lines[0] = "yes"

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//         lines[0] = "no"
//     }
// }



let max = 0
let min = 50
for (let i = 1; i <= Number(lines[0]); i++) {
    let arr = lines[i].split(" ");
    let day_time = 0
    let start = Number(arr[0])
    let duration = Number(arr[1])
    let arrive = Number(arr[2])

    if (arrive >= start) {
        day_time = 24 - (arrive - start - duration)
    } else {
        day_time = 24 + duration + (start - arrive)
    }
    if (day_time > max) {
        max = day_time
    }
    if (day_time < min) {
        min = day_time
    }

}

lines[0] = min + "\n" + max
