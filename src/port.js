const Ship = require('./cruise');
const Itinerary = require('./itinerary');

class Port {
    constructor(name, port) {
        this.name = name;
        this.port = 'Dover';
        this.ships = [];
    };



    addShip(ship) {
    this.ships.push(ship);
    }

    removeShip(ship) {
        this.ships = this.ships.filter(dockedShip => dockedShip !== ship);
    }

};
module.exports = Port;