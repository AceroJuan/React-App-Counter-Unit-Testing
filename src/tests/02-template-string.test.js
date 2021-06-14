import { getSaludo } from "../bases/02-template-string";

describe("prueba para 02-template-string.js", () => {
  test("getSaludo debe retornar Hola Juan!", () => {
    const nombre = "Juan";
    const saludo = getSaludo(nombre);
    expect(saludo).toBe("Hola " + nombre + "!");
  });

  test("getSaludo debe retornar Hola Carlos! si no hay argumento nombre ", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Carlos!");
  });
});
