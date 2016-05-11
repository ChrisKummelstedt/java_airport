//nota bene: when creating JS 'constructors', use capitalization!
//these variables (constructors) contain methods that are dont have global scope

function Airplane(weather){

  this._weather = typeof weather !== 'undefined' ? weather : new Weather();

  this.land = function(airport){
    if (this._weather.isStormy()){
      throw new Error ('Wait until skies are clear');
    };
    airport.clearForLanding(this);
  };

  this.takeOff = function(airport){
    if (this._weather.isStormy() === true){
      throw new Error ('Wait until skies are clear');
    };
    airport.clearForTakeOff(this);
  };


};
