function Ship(name, portName) {
    this.name = name,
    this.startingPort = portName
}

Ship.prototype.setSail = function() {
    this.startingPort = 0; // falsy
}    

Ship.prototype.dock = function (port) {
    this.startingPort = port;
}

module.exports = Ship;