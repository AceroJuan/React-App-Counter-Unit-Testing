// import { render } from "@testing-library/react";
import React from "react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from "enzyme";

describe("pruebas para PrimeraApp.js", () => {
  //   test("debe mostrar el mensaje 'Hola, soy Goku!'", () => {
  //     const saludo = "Hola, soy Goku!";
  //     const { getByText } = render(<PrimeraApp saludo={saludo} />);
  //     expect(getByText(saludo + "!!!")).toBeInTheDocument();
  //   });
  test("debe de mostrar '<PriemeraApp />' correctamente", () => {
    const saludo = "Hola, soy Goku!";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("debe mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola, soy Goku!";
    const subTitulo = "hola soy un subtitulo nuevo";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitle={subTitulo} />
    );
    const textParragraph = wrapper.find("p").text();
    expect(textParragraph).toBe(subTitulo);
  });
});
