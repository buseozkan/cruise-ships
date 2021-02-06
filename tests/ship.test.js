const Ship = require('../src/cruise');

describe('ship constructor', () => {
    test('ship should be an instance of object', () => {
        const ship = new Ship('Dover Port');
        expect(new Ship('Dover Port')).toBeInstanceOf(Object);
    });

});

describe('Ship with starting port', () => {
    test('has a starting port', () => {
        const ship = new Ship('Dover');
        expect(ship.startingPort).toBe('Dover');
    });
});

describe('ship sail', () => {
    test('can set sail', () => {
        const ship = new Ship('Dover');
        ship.setSail();

    expect(ship.startingPort).toBeFalsy();
    });
});


