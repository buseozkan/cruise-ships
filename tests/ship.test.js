const Ship = require('../src/cruise');
const Port = require('../src/Port');
const Itinerary = require('../src/Itinerary');

describe('ship constructor', () => {
    test('ship should be an instance of object', () => {
        const ship = new Ship('Dover Port');
        expect(new Ship('Dover Port')).toBeInstanceOf(Object);
    });

});

describe('Ship with starting port', () => {
    test('has a starting port', () => {
        let port;
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        expect(ship.startingPort).toBe(port);
    });
});

describe('ship sail', () => {
    test('can set sail', () => {
        let port;
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        ship.setSail();
    //expect(ship.previousPort).toBe(port);
    expect(ship.startingPort).toBeFalsy();
    });
});

describe('can dock at a different port', () => {
    const dover = new Port('Dover');
    const ship = new Ship(dover);
    const calais = new Port('Calais');
    ship.dock(calais);
    expect(ship.startingPort).toBe(calais);
});


