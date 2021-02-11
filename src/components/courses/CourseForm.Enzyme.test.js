import React from "react";
import { shallow } from "enzyme";
import CourseForm from "./CourseForm";

function renderCourseForm(args) {
  const defaultProps = {
    course: {},
    authors: [],
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };
  const props = { ...defaultProps, ...args };
  return shallow(<CourseForm {...props} />);
}

it("renders form and header", () => {
  const wrapper = renderCourseForm();
  //   console.log(wrapper.debug());
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add Course");
});

it("renders save button with label as 'Saving..'", () => {
  const wrapper = renderCourseForm({ saving: true });
  //   console.log(wrapper.debug());
  expect(wrapper.find("button").text()).toEqual("Saving...");
});

it("renders save button with label as 'Save' when saving is false", () => {
  const wrapper = renderCourseForm();
  //   console.log(wrapper.debug());
  expect(wrapper.find("button").text()).toEqual("Save");
});
