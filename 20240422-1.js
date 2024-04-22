arr = lines[0].split(" ");
let lv = Number(arr[1]);
for (let i = 1; i <= Number(arr[0]); i++) {
    if (lv > Number(lines[i])) {
        lv += Math.floor(Number(lines[i]) / 2);
    } else if (lv < Number(lines[i])) {
        lv = Math.floor(lv / 2);
    }
}

lines[0] = lv;
