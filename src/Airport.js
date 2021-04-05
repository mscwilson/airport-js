class Airport {

  constructor(capacity = 1) {
    this.hangar = []
    this.capacity = capacity
  }


  landPlane(plane) {
    if (this.hangar.length === this.capacity) {
      throw new Error("Hanger full")
    }
    else if (this.isStormy() === true) {
      throw new Error("Weather too bad for landing")
    }
    else {
    this.hangar.push(plane);
    }
  };

  takeoffPlane(plane) {
    if (this.isStormy() === true) {
      throw new Error("Weather too bad for takeoff")
    }
    let index = this.hangar.indexOf(plane)
    this.hangar.splice(index);
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
