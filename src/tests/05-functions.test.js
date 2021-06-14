import { getUser, getUsuarioActivo } from "../bases/05-funciones";
import "@testing-library/jest-dom";

describe("Pruebas en 05-funciones.js", () => {
  test("getUser debe retornar un objeto", () => {
    const userTest = {
      id: "ABC123",
      username: "Melman",
    };

    const user = getUser();
    expect(user).toEqual(userTest);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    const nombre = "Juan";
    const user = getUsuarioActivo(nombre);

    expect(user).toEqual({ id: "ABC456", username: nombre });
  });
});
