const assert = require('chai').assert
const returnsToOrigin = require('../lib/robot_origins.js');
pry = require('pryjs')


describe("returnsToOrigin", function() {
  it("detects when a control sequence will return it to origin", function() {
    result = returnsToOrigin('GRGRGRG');
    assert(result);
  });

  it("detects when a control sequence wont it to origin", function() {
    result = returnsToOrigin('GRGRLL');
    assert(!result);
  });
});
