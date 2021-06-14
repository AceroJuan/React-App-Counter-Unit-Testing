import { getHeroById, getHeroByOwner } from "../bases/08-import-export";

/* const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const hero = getHeroById(2);
    resolve(hero);
    reject("no se pudo encontrar el heroe");
  }, 2000);
});

promesa
  .then((hero) => {
    console.log("el hero", hero);
  })
  .catch((err) => console.error(err)); */

export const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      if (hero) {
        resolve(hero);
      } else {
        reject("no se pudo encontrar el heroe");
      }
    }, 1500);
  });
};
// getHeroByIdAsync(5)
//   .then(console.log)
//   .catch((err) => console.error(err));
