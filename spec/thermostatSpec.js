describe('airport', function() {

    it('Expects Airport to land a plane', function() {

        airport = new Airport;
        airport.land("plane 1");

        expect(airport.planes).toEqual(["plane 1"]);
    });

    it('Expects Capacity to equal 1', function() {
        airport = new Airport;
        expect(airport.capacity).toEqual(1);
    });

    it('Expects error when airport is full', function() {
        airport = new Airport;
        airport.land("plane 1");

        expect(airport.land("new plane")).toEqual("Airport is full");
    });

});