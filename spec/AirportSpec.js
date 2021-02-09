describe("Airport", function() {

  it("should have an array", function() {
    let airport = new Airport();
    expect(airport.hanger).toEqual([]);
  });

  it("can add item to hanger array", function() {
    let airport = new Airport();
    airport.landPlane("plane");
    expect(airport.hanger).toEqual(["plane"]);
  });

  it("can remove an item from the hanger array", function () {
    let airport = new Airport();
    airport.landPlane("plane");
    airport.takeoffPlane("plane");
    expect(airport.hanger).not.toContain("plane");
  });


});
