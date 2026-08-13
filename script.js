const defenders = ["Saliba", "Gabriel"];
const midfielders = ["Rice", "Partey"];
const squad = [...defenders, ...midfielders]
console.log(squad)

const basePlayer = {
    name: "moses",
    position:"LB"
};
const updateBasePlayer = {
    ...basePlayer,
    number: 13,
    club: "Deen Babes Fc"
};
console.log(updateBasePlayer)
