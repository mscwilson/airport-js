class Airport {

  constructor(capacity = 1) {
    this.hanger = []
    this.capacity = capacity
  }


  landPlane(plane) {
    if (this.hanger.length === this.capacity) {
      throw new Error("Hanger full")
    }
    else if (this.isStormy() === true) {
      throw new Error("Weather too bad for landing")
    }
    else {
    this.hanger.push(plane);
    }
  };

  takeoffPlane(plane) {
    if (this.isStormy() === true) {
      throw new Error("Weather too bad for takeoff")
    }
    let index = this.hanger.indexOf(plane)
    this.hanger.splice(index);
  };

  isStormy() {
    let randomVar = Math.random();
    if (randomVar < 0.9) {
      return false
    }
    else {
      return true
    };
  };


}
