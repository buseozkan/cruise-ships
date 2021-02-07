function Ship(itinerary, port) {
//    this.name = name,
//    this.startingPort = port,
 //   this.previousPort = null;
    this.itinerary = itinerary;
    this.startingPort = itinerary.ports[0];
    this.previousPort = null;
}

Ship.prototype.setSail = function() {
    const itinerary = this.itinerary;
    const startingPortIndex = itinerary.ports.indexOf(this.startingPort);

    if(startingPortIndex === (itinerary.ports.length -1)) {
        throw new Error('End of itinerary reached');
    }
   // this.startingPort = 0; // falsy
    this.previousPort = this.startingPort;
    this.startingPort = null;
}    

Ship.prototype.dock = function () {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
    this.startingPort = itinerary.ports[previousPortIndex + 1];
}

module.exports = Ship;