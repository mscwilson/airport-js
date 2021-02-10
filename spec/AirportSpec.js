"use strict";

describe("Airport", function() {
  let airport;

  beforeEach(function() {
    airport = new Airport();
  })

  it("should have an array", function() {
    expect(airport.hanger).toEqual([]);
  });

  it("can add item to hanger array", function() {
    airport.landPlane("plane");
    expect(airport.hanger).toEqual(["plane"]);
  });

  it("can remove an item from the hanger array", function () {
    airport.landPlane("plane");
    airport.takeoffPlane("plane");
    expect(airport.hanger).not.toContain("plane");
  });

  it("prevents landing when full", function() {
    airport.landPlane("plane");
    expect(function () {
      airport.landPlane("another plane");
      }).toThrowError("Hanger full");
  });

  it("has a default capacity that can be overridden", function() {
    let airport = new Airport(3);
    airport.landPlane("plane");
    airport.landPlane("plane");
    airport.landPlane("plane");
    expect(function () {
      airport.landPlane("another plane");
      }).toThrowError("Hanger full");
    });

  it("checks for weather at takeoff", function() {
    spyOn(airport, "isStormy");

    airport.takeoffPlane("plane");
    expect(airport.isStormy).toHaveBeenCalledWith();
  });

  it("prevents takeoff in bad weather", function() {
    spyOn(airport, "isStormy").and.returnValue(true);
    expect(function() {
      airport.takeoffPlane("plane");
    }).toThrowError("Weather too bad for takeoff");
  });

  it("prevents landing in bad weather", function() {

  })

});
