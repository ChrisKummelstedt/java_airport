describe("Airplane", function (){

  var airplane;
  var airport;

  beforeEach(function(){
    airplane = new Airplane;
    airport = jasmine.createSpyObj("airport", ["clearForLanding", "clearForTakeOff", "isStormy"] );
  });

  it ("lands at a airport when instructed to", function(){
    airport.isStormy() = (true);
    airplane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(airplane);
  });

  it ("takes off from an airport when instructed to", function(){
    airplane.land(airport);
    airplane.takeOff(airport);
    expect(airport.clearForTakeOff).toHaveBeenCalledWith(airplane);
  });

});
