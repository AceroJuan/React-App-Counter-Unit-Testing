import { returnArr } from "../bases/07-array-destructuring";

describe("pruebas en 07-array-destructuring.js", () => {
  test("debe retornar un string y un numero", () => {
    // const arr = returnArr();
    const [letters, num] = returnArr();

    expect(letters).toBe("ABC");
    expect(typeof letters).toBe("string");

    expect(num).toBe(123);
    expect(typeof num).toBe("number");
  });
});
