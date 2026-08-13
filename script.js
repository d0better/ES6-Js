class Account {
    constructor(Username) {
        this.Username=Username
    }
    showUser(){
        console.log(`user:${this.Username}`)
    }
}

class Streamer extends Account{
    goLive(){
        console.log(`${this.Username} is now live`)
    }
}

const streamer = new Streamer ("knomic")
streamer.showUser();
streamer.goLive();