describe("pruebas en el archivo demo.test.js", () => {
  test("los string deben ser iguales", () => {
    // inicializacion
    const mensaje = "Hola Mundo";

    // estimulo
    const mensaje2 = "Hola Mundo";

    // comportamineto
    expect(mensaje).toBe(mensaje2);
  });
});
