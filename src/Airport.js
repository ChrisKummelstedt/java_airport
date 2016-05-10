function Airport(){
  //the symbol _ means that this variable should be private.
  //arrays
  this._hanger = [];

  //functions for Airport
  this.planes = function(){
    return this._hanger
  };

  this.clearForLanding = function (airplane){
    this._hanger.push(airplane);
  };

  this.clearForTakeOff = function (airplane){
    this._hanger.pop(airplane);
  };

  this.isStormy = function(){
    return Math.random()<.1;
  };

};
