//const Ship = require('../src/cruise')
//
//
//describe('Ship', () => {
//   it('can be instantiated', () => {
//       expect(new Ship()).toBeInstanceOf(Object);
//   });
//})


const {Ship, Port} = require('../src/cruise.js')


describe('ship constructor', () => {
    it('ship should be an instance of object', () => {
        const port = new Port('Magusa Port');
        const ship = new Ship(port);
        expect(new Ship(port)).toBeInstanceOf(Object);
    });
});
    



