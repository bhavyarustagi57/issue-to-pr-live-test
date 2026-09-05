const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

function loadGreet() {
  const source = fs.readFileSync("./app.js", "utf8");
  const context = {};
  vm.createContext(context);
  vm.runInContext(source + "\nthis.__greet = greet;", context);
  return context.__greet;
}

test("preserves valid names", () => {
  const greet = loadGreet();
  assert.equal(greet("World"), "Hello World");
});

test("rejects empty names", () => {
  const greet = loadGreet();
  assert.throws(() => greet(""), Error);
});

test("rejects whitespace-only names", () => {
  const greet = loadGreet();
  assert.throws(() => greet("   "), Error);
});
