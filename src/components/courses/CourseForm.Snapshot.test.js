import React from "react";
import renderer from "react-test-renderer";
import CourseForm from "./CourseForm";
import { courses, authors } from "../../../Tools/mockData";
import { italics } from "../../../Tools/fileMock";
import { render } from "react-testing-library";

it("sets save button label to 'Saving...' when saving is true", () => {
  const tree = renderer.create(
    <CourseForm course={courses[0]} authors={authors} onChange={jest.fn()} />
  );
});
