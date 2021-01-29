const {Ship, Port} = require('../src/cruise.js')


describe('ship constructor', () => {
    test('ship should be an instance of object', () => {
        const port = new Port('Dover Port');
        const ship = new Ship(port);
        expect(new Ship(port)).toBeInstanceOf(Object);
    });
});

describe('ship sail', () => {
    test('can set sail', () => {
        const ship = new Ship('Dover');
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
    });
});

describe('dock from different port', () => {
    test('can dock at a different port', () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover);
        const calais = new Port('Calais');
        ship.dock(calais);

        expect(ship.startingPort).toBe(calais);
    });
});

    



