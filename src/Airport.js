class Airport {
  constructor() {
    this.hanger = []
  }


  landPlane(plane) {
    this.hanger.push(plane);
  };

  takeoffPlane(plane) {
    let index = this.hanger.indexOf(plane)
    this.hanger.splice(index);
  };
}
