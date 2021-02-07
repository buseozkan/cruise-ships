const Itinerary = require('../src/itinerary')
const Port = require('../src/port');

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

describe('that itinerary have ports', () => {
    it('can have ports', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        expect(itinerary.ports).toEqual([dover, calais]);
    });
});