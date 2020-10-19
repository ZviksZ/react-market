import * as React from 'react';
import {App}      from './App';
import {shallow}  from "enzyme";


describe("App component", () => {
  it("should render App", () => {
    const component = shallow(<App />)

    const img = component.find("img");
    expect(img).toHaveLength(1)
  });
});
