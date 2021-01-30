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