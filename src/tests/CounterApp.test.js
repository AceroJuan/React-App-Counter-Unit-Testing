import React from "react";
import CounterApp from "../CounterApp";
import { shallow } from "enzyme";

describe("pruebas para CounterApp.js", () => {
  let wrapper = shallow(<CounterApp value={10} />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp value={10} />);
  });

  test("debe mostrar '<CounterApp />' correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar 100 como valor por defecto", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const defaultCounter = wrapper.find("h2").text();
    expect(defaultCounter).toBe("100");
  });

  test("debe incrementar en 1 el valor de counter", () => {
    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text();
    expect(counterText).toBe("11");
  });

  test("debe restar en 1 el valor de counter", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("h2").text();
    expect(counterText).toBe("9");
  });

  test("debe regresar al valor por defecto de counter", () => {
    const wrapper = shallow(<CounterApp value={105} />);

    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");

    const counterText = wrapper.find("h2").text();
    expect(counterText).toBe("105");
  });
});
