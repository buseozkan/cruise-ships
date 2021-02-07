function Ship(itinerary) {
    this.itinerary = itinerary;
    this.startingPort = itinerary.ports[0];
    this.previousPort = null;

    this.startingPort.addShip(this);
}

Ship.prototype.setSail = function() {
    const itinerary = this.itinerary;
    const startingPortIndex = itinerary.ports.indexOf(this.startingPort);

    if(startingPortIndex === (itinerary.ports.length -1)) {
        throw new Error('End of itinerary reached');
    } else {
        this.startingPort.removeShip(this);
    
   // this.startingPort = 0; // falsy
    this.previousPort = this.startingPort;
    
    this.startingPort = null;
}}   

Ship.prototype.dock = function () {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
    
    this.startingPort = itinerary.ports[previousPortIndex + 1];
    
    this.startingPort.addShip(this);
}

module.exports = Ship;