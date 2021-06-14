import { getHeroById, getHeroByOwner } from "../bases/08-import-export";
import heroes from "../data/heroes";

describe("pruebas para 08-import-export.js", () => {
  test("debe retornar un heroe por id", () => {
    const id = 5;
    const hero = getHeroById(id);

    const heroData = heroes.find((h) => h.id === id);
    expect(hero).toEqual(heroData);
  });

  test("debe retornar undefined si heroe no existe", () => {
    const id = 6;
    const hero = getHeroById(id);

    expect(hero).toBe(undefined);
  });

  test("debe retonar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const hero = getHeroByOwner(owner);

    const heroList = heroes.filter((h) => h.owner === owner);
    expect(hero).toEqual(heroList);
  });

  test("debe retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const hero = getHeroByOwner(owner);

    expect(hero.length).toBe(2);
  });
});
