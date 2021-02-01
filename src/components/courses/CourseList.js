import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CourseList = ({ courses }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <td />
          <td>Title</td>
          <td>Author</td>
          <td>Category</td>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => {
          return (
            <tr key={course.id}>
              <td>
                <a
                  className="btn btn-light"
                  href={
                    "https://app.pluralsight.com/library/courses/" + course.slug
                  }
                >
                  Watch
                </a>
              </td>
              <td>
                <Link to={"/courses/" + course.slug}>{course.title}</Link>{" "}
              </td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CourseList;
