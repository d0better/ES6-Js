function showPlayers(...players) {
    console.log(players)
}
showPlayers("saka", "rice", "odgaard");
function showPlayers(...players) {
    for(let player of players){
        console.log(player)
    }
}