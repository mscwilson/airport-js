"use strict";

describe("Airport", function() {
  let airport, stormySpy;

  beforeEach(function() {
    airport = new Airport();
    stormySpy = spyOn(airport, "isStormy").and.returnValue(false);
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
    let newStormySpy = spyOn(airport, "isStormy").and.returnValue(false);

    airport.landPlane("plane");
    airport.landPlane("plane");
    airport.landPlane("plane");
    expect(function () {
      airport.landPlane("another plane");
      }).toThrowError("Hanger full");
    });

  it("checks for weather at takeoff", function() {
    airport.takeoffPlane("plane");
    expect(airport.isStormy).toHaveBeenCalledWith();
  });

  it("prevents takeoff in bad weather", function() {
    stormySpy.and.returnValue(true);
    expect(function() {
      airport.takeoffPlane("plane");
    }).toThrowError("Weather too bad for takeoff");
  });

  it("prevents landing in bad weather", function() {
    stormySpy.and.returnValue(true);
    expect(function() {
      airport.landPlane("plane");
    }).toThrowError("Weather too bad for landing");
  })

  it("is only occasionally stormy", function(){
    stormySpy.and.callThrough();
    let results = []
    for (let step = 0; step < 100; step++) {
      results.push(airport.isStormy())
    }
    let uniqueResults = [...new Set(results)]
    uniqueResults.sort()
    expect(uniqueResults).toEqual([false, true])
  })

});
