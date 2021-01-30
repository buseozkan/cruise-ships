const Port = require('../src/port.js');

describe('Port', () => {
    test('port can be initiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
});