//Strict mode changes previously accepted "bad syntax" into real errors.

// Example: 1
// As an example, in normal JavaScript, mistyping a variable name creates a new global variable.
// In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

// Example: 2
// In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.
// In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

'use strict';

describe("Feature testing:", function(){

  var airplane;
  var airport;

  beforeEach(function(){
    airplane = new Airplane();
    airport = new Airport();
  });

  it ("planes can be instructed to land at an airport", function(){
    spyOn(airplane._weather, 'isStormy').and.returnValue(false);
    airplane.land(airport);
    expect(airport.planes()).toContain(airplane)
  });

  it ("planes can take off with the implication that they are no longer in a hangar", function(){
    spyOn(airplane._weather, 'isStormy').and.returnValue(false);
    airplane.land(airport);
    airplane.takeOff(airport);
    expect(airport.planes()).not.toContain(airplane)
  });

  it ("checks weather and does not allow planes to land when weather is stormy", function(){
    spyOn(airplane._weather, 'isStormy').and.returnValue(true);
    expect(function(){airplane.land(airport);}).toThrowError("Wait until skies are clear");
  });

  it ("checks weather and does not allow planes to take-off when weather is stormy", function(){
    spyOn(airplane._weather, 'isStormy').and.returnValue(true);
    expect(function(){airplane.takeOff(airport);}).toThrowError("Wait until skies are clear");
  });

  it ("it does not allow planes land when airports are full", function(){
    spyOn(airplane._weather, 'isStormy').and.returnValue(false);
    airplane.land(airport)
    airplane.land(airport)
    airplane.land(airport)
    expect(function(){airplane.land(airport);}).toThrowError("We are full");
  });
});
