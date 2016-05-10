describe("Airport", function(){

  var airplane;
  var airport;

  beforeEach(function(){
    airplane = jasmine.createSpy("airplane");
    airport = new Airport();
  });

  it("it has no planes by default", function(){
    expect(airport.planes()).toEqual([]);
  });

});
