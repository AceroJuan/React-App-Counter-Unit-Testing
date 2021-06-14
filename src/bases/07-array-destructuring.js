// array destructuring

const characters = ["Goku", "Vegeta", "Gohan"];
const [fc] = characters;
const [, sc] = characters;
const [, , tc] = characters;
/* console.log(tc); */

export const returnArr = () => {
  return ["ABC", 123];
};

// const [letters, num] = returnArr();
/* console.log(letters, num); */

const usesState = (value) => {
  return [
    value,
    () => {
      // console.log("Hello world");
    },
  ];
};
// const [nombre, setNombre] = usesState("Goku");

// console.log(nombre);
// setNombre();
