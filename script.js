class Gamer {
    constructor(Username) {
        this.Username=Username
    }
    login(){
        console.log(`${this.Username} is logged in`)
    }
}
 class FutPlayer extends Gamer {
    playMatch(){
        console.log(`${this.Username} is playing a match`)
    }
 }
 const player = new FutPlayer("knomic")
 player.login();
 player.playMatch();