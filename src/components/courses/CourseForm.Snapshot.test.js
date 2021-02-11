import React from "react";
import renderer from "react-test-renderer";
import CourseForm from "./CourseForm";
import { courses, authors } from "../../../Tools/mockData";

it("sets save button label to 'Saving...' when saving is true", () => {
  const tree = renderer.create(
    <CourseForm
      saving={true}
      course={courses[0]}
      authors={authors}
      onChange={jest.fn()}
      onSave={jest.fn()}
    />
  );

  expect(tree).toMatchSnapshot();
});

it("sets save button label to 'Save' when saving is false", () => {
  const tree = renderer.create(
    <CourseForm
      saving={false}
      course={courses[0]}
      authors={authors}
      onChange={jest.fn()}
      onSave={jest.fn()}
    />
  );

  expect(tree).toMatchSnapshot();
});
