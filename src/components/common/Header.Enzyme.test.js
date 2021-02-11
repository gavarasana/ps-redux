import React from "react";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Header from "./header";

it("should have three NavLinks", () => {
  const wrapper = shallow(<Header />);
  //   console.log(wrapper.debug());
  expect(wrapper.find("NavLink").length).toBe(3);
});

it("should have three anchor tags with mount", () => {
  const wrapper = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  console.log(wrapper.debug());
  expect(wrapper.find("a").length).toBe(3);
});
