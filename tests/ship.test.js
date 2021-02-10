const Ship = require('../src/cruise');
const Port = require('../src/Port');
const Itinerary = require('../src/itinerary');

describe('ship constructor', () => {
    test('ship should be an instance of object', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        expect(ship).toBeInstanceOf(Object);
    });

});

describe('Ship with starting port', () => {
    test('has a starting port', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        expect(ship.startingPort).toBe(port);
    });
});

describe('ship sail', () => {
    test('can set sail', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
//        let port;
//        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        ship.setSail();
    //expect(ship.previousPort).toBe(port);
    expect(ship.startingPort).toBeFalsy();
    expect(dover.ships).not.toContain(ship);
    });
});

describe('can dock at a different port', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
    expect(ship.startingPort).toBe(calais);
    expect(calais.ships).toContain(ship);
});


describe('setsail method throws an error', () => {
    it('can\'t sail further than its itinerary', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);
        ship.setSail();
        ship.dock();
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });
});

describe('gets added to port on instantiation', () => {
    it('gets added to port on instantiation', () => {
        const dover = new Port('Dover');
        const itinerary = new Itinerary([dover]);
        const ship = new Ship(itinerary);

        expect(dover.ships).toContain(ship);
    });
});
