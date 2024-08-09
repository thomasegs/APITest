test("Acertivas do teste", () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
  expect(number).toEqual(10);
  expect(number).toBeGreaterThan(9);
  expect(number).toBeLessThan(11);
});

test("Testando objetos", () => {
  const obj = {
    name: "Thomas",
    age: 25,
    mail: "thomaserikgaspar@hotmail.com",
  };

  expect(obj).toHaveProperty("name");
  expect(obj).toHaveProperty("name", "Thomas");
  expect(obj.name).toBe("Thomas");

  const obj2 = {
    name: "Thomas",
    age: 25,
    mail: "thomaserikgaspar@hotmail.com",
  };

  expect(obj2).toEqual(obj);
  expect(obj).toBe(obj);
});
