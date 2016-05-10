//nota bene: when creating JS 'constructors', use capitalization!
//these variables (constructors) contain methods that are dont have global scope

function Airplane(){



  this.land = function(airport){
    if (airport.isStormy() === false){
      airport.clearForLanding(this);
    };
    if (airport.isStormy() === true){
      throw "Wait until skies are clear";
    };
  };

  this.takeOff = function(airport){
    airport.clearForTakeOff(this);
  };


};
