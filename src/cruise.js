function Port(name) {
    this.name = name,
    this.port = "Calais",
    this.startingPort = this.startingPort,
    this.previousPort = null;
}

function Ship (portName) {
  this.startingPort = portName;
}

Ship.prototype.setSail = function() {
    this.startingPort = 0; // falsy
}    

Ship.prototype.dock = function (port) {
    this.startingPort = port;
}

module.exports = {
    Ship,
    Port,
}