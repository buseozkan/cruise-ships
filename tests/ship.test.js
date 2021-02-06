const Ship = require('../src/cruise');
const Port = require('../src/Port');

describe('ship constructor', () => {
    test('ship should be an instance of object', () => {
        const ship = new Ship('Dover Port');
        expect(new Ship('Dover Port')).toBeInstanceOf(Object);
    });

});

describe('Ship with starting port', () => {
    test('has a starting port', () => {
        let port;
        const ship = new Ship(port);
        expect(ship.startingPort).toBe(port);
    });
});

describe('ship sail', () => {
    test('can set sail', () => {
        let port;
        const ship = new Ship(port);
        ship.setSail();

    expect(ship.startingPort).toBeFalsy();
    });
});


