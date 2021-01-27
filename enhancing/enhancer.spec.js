const enhancer = require('./enhancer.js');

it("testing tests", () => {
    expect(3).toBe(3);
});

it("exists", () => {
    expect(enhancer).toBeDefined();
});

describe("repairs function", () => {
    beforeEach(() => {
        // let item = {name, durability, enhancement}
        enhancer.repair = jest.fn((item) => { return item });
    });

    it("repairs item", () => {
        let item = enhancer.repair.item;
        let repair = enhancer.repair;
        const expected = item;
        const actual = repair(item)
        expect(repair).toBeDefined();
        expect(actual).toBe(expected)

    });
})