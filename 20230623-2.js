let lines = [];

lines[0] = "7 6"
lines[1] = "......"
lines[2] = "......"
lines[3] = ".####."
lines[4] = "#..S.#"
lines[5] = "#....#"
lines[6] = ".####."
lines[7] = "......"

let row = lines[0].split(" ")[0]
let col = lines[0].split(" ")[1]

let map = [];
let s_row = 0
let s_col = 0

for (let i = 1; i <= row; i++) {
    map[i - 1] = lines[i].split("")
    if(map[i - 1].indexOf("S")!== -1){
        s_row = i - 1;
        s_col = Number(map[i - 1].indexOf("S"));
    }
}



// const startIndex = (element) => element === "S";

// console.log(map.findIndex(startIndex));

// console.log("map[s_row][s_col]", map[s_row][s_col])
// console.log("s_col",s_col)
// console.log("s_row",s_row)