const Ship = require('../src/cruise.js');
const Port = require('../src/port');

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

describe('dock method from port', () => {
    const dover = new Port('Dover');
    const ship = new Ship(dover);
    const calais = new Port('Calais');
    ship.dock(calais);

        expect(ship.startingPort).toBe(calais);
});

    

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
