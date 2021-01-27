const enhancer = require('./enhancer.js');
// test away!

it("testing tests", () => {
    expect(3).toBe(3);
});

it("exists", () => {
    expect(enhancer).toBeDefined();
});
