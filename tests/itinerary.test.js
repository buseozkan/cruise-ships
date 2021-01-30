const Itinerary = require('../src/itinerary')

describe('new object', () => {
    it('itinerary should be an instance of object', () => {
        const itinerary = new Itinerary('Rotherdam next port');
        expect(new Itinerary('Rotherdam next port')).toBeInstanceOf(Object);
    });
})

describe('ports property', () => {
    test('sets the ports property', () => {
        const itinerary = new Itinerary ('Rotherdam next port');
        expect(itinerary.ports).toEqual('Rotherdam next port');
    });
});