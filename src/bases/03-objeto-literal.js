// literal objects

const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 112233,
    lat: 10.20405,
    lon: 20.10475,
  },
};

console.table(persona);

const persona2 = { ...persona };
persona2.nombre = "Peter";
console.log("persona 2", persona2);
