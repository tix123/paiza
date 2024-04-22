let arr = lines[0].split(" ");
lines[0] =
    Number(arr[0]) < Math.floor(Number(arr[1]) * 0.7)
        ? Number(arr[0])
        : Math.floor(Number(arr[1]) * 0.7);
