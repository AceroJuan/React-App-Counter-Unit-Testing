// template string

const nombre = "Juan";
const apellido = "Acero";

/* let nombreCompleto = nombre + " " + apellido; */
let nombreCompleto = `
${nombre} 
${apellido}
${1 + 1}
`;

/* console.log(nombreCompleto); */

export function getSaludo(nombre = "Carlos") {
  return `Hola ${nombre}!`;
}

/* console.log(`esto es un saludo ${getSaludo(nombre)}`); */
