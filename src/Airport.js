class Airport {
  constructor() {
    this.hanger = []
  }


  landPlane(plane) {
    if (this.hanger.length === 1) {
      throw new Error("Hanger full")
    }
    else {
    this.hanger.push(plane);
  }
  };

  takeoffPlane(plane) {
    let index = this.hanger.indexOf(plane)
    this.hanger.splice(index);
  };
}
