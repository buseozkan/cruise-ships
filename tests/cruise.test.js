const Ship = require('../src/cruise.js');

describe('ship constructor', () => {
    it('ship should be an instance of object', () => {
        const ship = new Ship('Dover Port');
        expect(new Ship('Dover Port')).toBeInstanceOf(Object);
    });
});

describe('ship sail', () => {
    test('can set sail', () => {
        const ship = new Ship('Dover');
        ship.setSail();
    
        expect(ship.startingPort).toBeFalsy();
    });
});

//describe('dock from different port', () => {
//    test('can dock at a different port', () => {
//        const ship = new Ship('Dover');
//        const calais = new Port('Calais');
//        ship.dock(calais);
//
//        expect(ship.startingPort).toBe(calais);
//    });
//});

    

//describe('a new Port object', () => {
//    it('Port should be an instance of object', () => {
//        const port = new Port('Magusa Port');
//       expect(new Port).toBeInstanceOf(Object);
//    });
//});

//describe('port name', () => {
//    it('new Port should have a name property', () => {
//        const port = new Port('Magusa Port');
 //       expect(port.name).toBe('Magusa Port');
//    });
//});
