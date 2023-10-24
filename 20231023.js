lines[0] = lines[1] + lines[0] + lines[1]

lines[0] = lines[0].length > lines[1].length ? lines[1] : lines[0]

lines[0] = lines[0].endsWith("d") ? "Yes" : "No"

lines[0] = lines[0].charAt(Number(lines[2])-1) === lines[1] ? "Yes" : "No"

