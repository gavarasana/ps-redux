import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CourseList = ({ courses, onDeleteClick }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <td />
          <td>Title</td>
          <td>Author</td>
          <td>Category</td>
          <td />
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
              <td>{course.authorName}</td>
              <td>{course.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDeleteClick(course)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default CourseList;
