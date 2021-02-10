class Plane {

  _location = "the air";
  _isFlying = true;

  get isFlying() {
    return this._isFlying;
  }

  get location() {
    return this._location;
  }

  set location(newLocation) {
    this._location = newLocation;
  }

}
