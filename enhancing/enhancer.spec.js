const enhancer = require('./enhancer.js');

it("testing tests", () => {
    expect(3).toBe(3);
});

it("exists", () => {
    expect(enhancer).toBeDefined();
});

describe("success function", () => {
    item = { name: "newItemName", enhancement: 7, durability: 11 }

    it("has a param that exists", () => {
        expect(item).toBeDefined();
    });

    it("increases enhancement if applicable", () => {
        let success = enhancer.success;
        expect(success({ name: "newItemName", enhancement: 7, durability: 11 })).toStrictEqual({ name: "newItemName", enhancement: 8, durability: 11 })
    });

    it("enhancement doesn't increase if item.enhancement = 20", () => {
        let success = enhancer.success;
        expect(success({ name: "Birdie", enhancement: 20, durability: 50 })).toStrictEqual({ name: "Birdie", enhancement: 20, durability: 50 })
    });
})

describe("fail function", () => {
    item = { name: "plato", enhancement: 55, durability: 99 };

    it("has a param that exists", () => {
        expect(item).toBeDefined();
    });

    it("decreases durability by 5 if enhancement < 15", () => {
        let fail = enhancer.fail;
        expect(fail({ name: "me", enhancement: 14, durability: 22 })).toStrictEqual({ name: "me", enhancement: 14, durability: 17 });
    });

    it("decreases durability by 10 if enhancement is 15+", () => {
        let fail = enhancer.fail;
        expect(fail({ name: "you", enhancement: 15, durability: 55 })).toStrictEqual({ name: "you", enhancement: 15, durability: 45 });
    });
});
