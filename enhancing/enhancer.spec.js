const enhancer = require('./enhancer.js');

it("testing tests", () => {
    expect(3).toBe(3);
});

it("exists", () => {
    expect(enhancer).toBeDefined();
});

describe("success function", () => {
    beforeEach(() => {
        item = {
            name: "newItemName", enhancement: 7, durability: 11
        };

    });

    it("exists", () => {
        expect(item).toBeDefined();
    });

    it('increases enhancement if applicable', () => {
        let success = enhancer.success;
        console.log(item, "ITEM")
        expect(success(item)).toStrictEqual({ name: "newItemName", enhancement: 8, durability: 11 })
    })
})