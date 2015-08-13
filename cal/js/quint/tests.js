QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test("Testing evaluation function with plus", function(assert) {
  assert.equal("5", evaluate("2+3"), "3 + 2 is 5");
});

QUnit.test("Testing evaluation function with mines", function(assert) {
  assert.equal("1", evaluate("4-3"), "4 - 3 is 1");
});

QUnit.test("Testing evaluation function with multiflication", function(assert) {
  assert.equal("6", evaluate("2*3"), "3 * 2 is 6");
});


QUnit.test("Testing Plus function with failing", function(assert) {
  assert.equal("5", evaluate("2 + 2"), "2 + 2 is 5");
});
