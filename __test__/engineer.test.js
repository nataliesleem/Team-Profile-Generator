const Engineer = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set Github via constructor argument", () => {
  const testValue = 100;
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get github via getGithub()", () => {
  const testValue = 100;
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});