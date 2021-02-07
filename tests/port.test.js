const Port = require('../src/port.js');

describe('Port', () => {
    test('port should be an instance of object', () => {
        const port = new Port('Magusa Limani')
        expect(new Port('Magusa Limani')).toBeInstanceOf(Object);
    });
});

describe('name property', () => {
    test('sets the name property', () => {
        const port = new Port ('Magusa Limani');
        expect(port.name).toEqual('Magusa Limani');
    });
});

describe('should add new ship', () => {
    it('add a ship', () => {
        const port = new Port('Dover');
        const ship = {};
        port.addShip(ship);
        expect(port.ships).toContain(ship);
    });
});

describe('should remove a ship', () => {
    it('can remove a ship', () => {
        const port = new Port('Dover');
        const east = {};
        const west = {};

        port.addShip(east);
        port.addShip(west);
        port.removeShip(west);

        expect(port.ships).toEqual([east]);
    });
});