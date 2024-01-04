lines[0] = lines[0] - lines[1]

lines[0] = lines[0] - 5


let add_cnt = 0
let minus_cnt = 0
let add_max = 0
let minus_max = 0

for (let i = 2; i <= Number(lines[0]); i++) {
    if (Number(lines[i]) > Number(lines[i - 1])) {
        add_cnt++
        if(add_cnt > add_max){
            add_max = add_cnt
        }
        minus_cnt = 0
    } else if (Number(lines[i]) < Number(lines[i - 1])) {
        minus_cnt++
        if(minus_cnt > minus_max) {
            minus_max = minus_cnt
        }
        add_cnt = 0
    }
}

lines[0] = minus_max + " " + add_max