// object destructuring

const persona = {
  firstName: "tony",
  lastName: "Stark",
  age: 45,
  pass: "Ironman",
  rank: "Captain",
};

const { firstName, lastName, age, pass, rank } = persona;

/* console.log(firstName, lastName, age, pass, rank); */

/* console.table(firstName);
  console.table(lastName);
  console.table(age);
  console.table(pass); */

const usesContext = ({ firstName, lastName, age, pass, rank }) => {
  /* console.log(firstName, lastName, age, pass, rank); */

  return {
    combatName: pass,
    status: rank,
    latlng: {
      lat: 10.345,
      lng: -13.543,
    },
  };
};
const {
  combatName,
  status,
  latlng: { lat, lng },
} = usesContext(persona);
console.log(combatName, status, lat, lng);
