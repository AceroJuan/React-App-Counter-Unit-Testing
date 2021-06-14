// JS functions

// function saludo(nombre) {
//   return `hola, soy ${nombre}!`;
// }
// console.log(saludo("Goku"));

// const saludo2 = (nombre) => {
//   return `hola, soy ${nombre}!`;
// };
// console.log(saludo2("Vegeta"));

// const saludo3 = (nombre) => `hola, soy ${nombre}!`;
// console.log(saludo3("Gohan"));

// const saludo4 = () => `Hola Mundo!`;
// console.log(saludo4());

export const getUser = () => {
  return {
    id: "ABC123",
    username: "Melman",
  };
};
// console.log(getUser());

// const getUser2 = () => ({
//   id: "123ABC",
//   username: "Melmanito",
// });
// console.log(getUser2());

export const getUsuarioActivo = (nombre) => ({
  id: "ABC456",
  username: nombre,
});

// const usuarioActivo = getUsuarioActivo("Juan");
// console.log(usuarioActivo);
