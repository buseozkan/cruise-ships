function Ship(name, port) {
//    this.name = name,
    this.startingPort = port,
    this.previousPort = null;

}

Ship.prototype.setSail = function() {
   // this.startingPort = 0; // falsy
    this.previousPort = this.startingPort;
    this.startingPort = null;
}    

Ship.prototype.dock = function (port) {
    this.startingPort = port;
}

module.exports = Ship;