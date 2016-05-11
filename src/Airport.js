function Airport(){
  //the symbol _ means that this variable should be private.
  //arrays
  this._hanger = [];

  this._DEFAULT_CAPACITY = 3;

};

Airport.prototype.isFull = function () {
  return (this._hanger.length === this._DEFAULT_CAPACITY)
};

Airport.prototype.planes = function(){
  return this._hanger
};

Airport.prototype.clearForTakeOff = function (airplane){
  this._hanger.pop(airplane);
};

Airport.prototype.clearForLanding = function (airplane){
  if (this.isFull()){
    throw new Error ('We are full');
  };
  this._hanger.push(airplane);
};
