const Ship = require('../src/cruise');

beforeEach(() => {
    dover = {
        name: 'Dover'
    };
});


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


