const Ship = require('../src/cruise.js');
//const Ship = require('../src/Cruise');
//const Port = require('../src/Port');
//const Itinerary = require('../src/Itinerary');

/*test('should be true', () => { 
    expect(true).toBe(true);
});*/ 

let ship;
        let port;
        let dover;
        let calais;

        beforeEach(() => {
            port = {   

            };
            dover = {
                ...port,
                name: 'Dover',
            };
            calais = {
                ...port,
                name: 'Calais',
            };
            ship = new Ship();
        }
    );

 describe('Ship', () => {
    describe('with a port and itinerary', () => {
    test('has a starting port', () => {
        expect(ship.startingPort).toBe(dover);
    });
});

describe('ship constructor', () => {
    test('ship should be an instance of object', () => {
        const ship = new Ship('Dover Port');
        expect(new Ship('Dover Port')).toBeInstanceOf(Object);
    });
    
    /*
    test('has a starting port', () => {
        const port = {
            name: 'Dover'
        }
       // const itinerary = new Itinerary([port]);
       // const ship = new Ship(itinerary);
        expect(ship.startingPort).toBe(port);
    });
    */
});


describe('ship sail', () => {
    test('can set sail', () => {
        //const port = new Port('Dover');
        //const itinerary = new Itinerary([port]);
        const ship = new Ship('Dover');
        ship.setSail();
     //       this.previousPort = this.startingPort;
      //      this.startingPort = null;
        expect(ship.startingPort).toBeFalsy();
      //  expect(ship.previousPort).toBe(port);
    });
});