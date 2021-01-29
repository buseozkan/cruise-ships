function Port(name) {
    this.name = name;
}

function Ship(portName) {
  this.startingPort = portName;
}


module.exports = {
    Ship,
    Port
}