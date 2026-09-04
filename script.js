const players = ["saka", "neymar", "haaland"];
const [first, , third, fourth = "mbappe", ...others ] = players
console.log(first);
console.log(third);
console.log (fourth);
console.log(others);