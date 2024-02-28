const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', function () {
  it('...', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('...', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('...', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('...', function () {
    assert.strictEqual(calculateNumber(1.7, 3.5), 6);
  });
  it('...', function () {
    assert.strictEqual(calculateNumber(0.0, 3.5), 4);
  });
  it('...', function () {
    assert.strictEqual(calculateNumber(2.1, 3.5), 6);
  });
  it('...', function () {
    assert.strictEqual(calculateNumber(2.6, 3.5), 7);
  });
})
