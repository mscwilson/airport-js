"use strict";

describe("Plane", function() {

  it("starts out in the air", function() {
    let plane = new Plane();
    expect(plane.isFlying).toEqual(true)
  })


})
