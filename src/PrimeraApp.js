import React from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo, subtitle }) => {
  /* const saludo = {
    nombre: "Juan",
    edad: 36,
  }; */

  return (
    <>
      <h1>{saludo}</h1>
      {/* <h1>{JSON.stringify(saludo, null, 3)}</h1> */}
      <p>{subtitle}</p>
    </>
  );
};
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};
PrimeraApp.defaultProps = {
  subtitle: "Soy un subtitulo viteh",
};

export default PrimeraApp;
