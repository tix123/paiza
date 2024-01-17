let people = Number(lines[0])
let vote_map = new Map();
let highest_vote = 0
let winner = ""

for (let i = 1; i <= people; i++) {
    let vote_qty = Number(vote_map.get(lines[i]))
    if (vote_map.has(lines[i])) {
        vote_map.set(lines[i], vote_qty + 1)
    } else {
        vote_map.set(lines[i], 1)
    }

    vote_qty = Number(vote_map.get(lines[i]))
    if (vote_map.get(lines[i]) > highest_vote) {
        highest_vote = vote_qty
        winner = lines[i]
    }
}

lines[0] = winner