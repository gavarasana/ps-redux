import React from "react";
import { cleanup, render } from "react-testing-library";
import CourseForm from "./CourseForm";

afterEach(cleanup);

function renderCourseForm(args) {
  const defaultProps = {
    course: {},
    authors: [],
    saving: false,
    onSave: () => {},
    onChange: () => {},
    errors: {},
  };
  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it("should render Add Course header", () => {
  const { getByText } = renderCourseForm();
  console.log(getByText);
  getByText("Add Course");
});
