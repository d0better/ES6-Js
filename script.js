function player(name, position){
    this.name = name;
    this. position=position;

    this.introduce = function(){
        console.log(`I am ${this.name} and i play ${this.position}`)
    }
}
let p1 = new player("Knomic", "LB");
p1.introduce();