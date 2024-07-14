const { add, err, promiseTest, app, mul } = require("../index");
const supertest = require("supertest");
test("toBe", () => {
  expect(add(1, 2)).toBe(3);
});

test("toEqual", () => {
  expect(add(1, 2)).toBe(3);
});

test("toBeNull", () => {
  expect(add(1, 2)).not.toBeNull();
});
test("toBeNull", () => {
  expect(add(1, 2)).not.toBeGreaterThan(3);
});
test("toBeNull", () => {
  expect(add(1, 2)).not.toBeLessThan(3);
});

test("toBeCloseTo", () => {
  expect(add(1.1111, 2.2222)).toBeCloseTo(3.33);
});
test("toMatch", () => {
  expect(add("Hello", "World")).toMatch(/Hello/);
});
test("toMatch", () => {
  expect(() => {
    err();
  }).toThrow("I am a new Error");
});

test("promiseTest", () => {
  promiseTest(1, 2)
    .then((data) => {
      expect(data).toBe("+ve");
    })
    .catch((e) => {
      expect(e).toBe("-ve");
    });
});

test("testMul", () => {
  expect(mul(10, 20)).toBe(200);
});

test("TEST GET user", async () => {
  await supertest(app)
    .get("/users")
    .expect(200)
    .then((result) => {
      expect(result && result.body && typeof result.body.users === "object");
    });
});
