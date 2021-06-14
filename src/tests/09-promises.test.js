import { getHeroByIdAsync } from "../bases/09-promises";
import heroes from "../data/heroes";

describe("pruebas para 09-promises.js", () => {
  test("getHeroByIdAsync debe retornar un heroe async", (done) => {
    const id = 1;
    getHeroByIdAsync(id).then((hero) => {
      expect(hero).toBe(heroes[0]);
      done();
    });
  });
  test("debe obtener un error si el heroe por id no existe", (done) => {
    const id = 10;

    getHeroByIdAsync(id).catch((error) => {
      expect(error).toBe("no se pudo encontrar el heroe");
      done();
    });
  });
});
