describe("Airplane", function (){

  var airplane;
  var airport;

  beforeEach(function(){
    airplane = new Airplane();
    airport = jasmine.createSpyObj("airport", ["clearForLanding", "clearForTakeOff", "isFull"] );
    spyOn(Math,'random').and.returnValue(0);
  });

  it ("lands at a airport when instructed to", function(){
    airplane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(airplane);
  });

  it ("takes off from an airport when instructed to", function(){
    airplane.land(airport);
    airplane.takeOff(airport);
    expect(airport.clearForTakeOff).toHaveBeenCalledWith(airplane);
  });

});
