describe("Airport", function(){

  var airplane;
  var airport;

  beforeEach(function(){
    airplane = jasmine.createSpy("airplane", ["land"]);
    airport = new Airport();
  });

  it("it has no planes by default", function(){
    expect(airport.planes()).toEqual([]);
  });

  it("it does not allow planes to land when full", function(){
    for(var i=0; i < (airport._DEFAULT_CAPACITY); i++){
      airport.clearForLanding(airplane);
    }
    expect(function(){airport.clearForLanding(airplane);}).toThrowError("We are full");
  });


});
