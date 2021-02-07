import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
//import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";

class CoursesPage extends React.Component {
  state = {
    redirectToAddCoursePage: false,
  };

  componentDidMount() {
    const { authors, courses, loadCourses, loadAuthors } = this.props;

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && (
          <Redirect to="/courses/add-new" />
        )}

        <h2>Courses</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-course"
              onClick={() => this.setState({ redirectToAddCoursePage: true })}
            >
              Add Course
            </button>
            <CourseList courses={this.props.courses} />
          </>
        )}
      </>
    );
  }
}

//function mapStateToProps(state, ownProps){
function mapStateToProps(state) {
  return {
    courses: !state.authors
      ? []
      : state.courses.map((course) => {
          return {
            ...course,
            authorName: state.authors.find((a) => a.id === course.authorId)
              .name,
          };
        }),
    authors: state.authors,
    loading: state.apiCallsInProgress > 0,
  };
}

// const mapDispatchToProps = {
//   createCourse: coursesActions.createCourse,
// };

// function mapDispatchToProps(dispatch) {
//   return {
//     //createCourse: (course) => dispatch(coursesActions.createCourse(course)),
//     actions: {
//       loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
//       loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
//     },
//   };
// }

// Pass mapDispathcToProps as an object

const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
};

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);

CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connectedStateAndProps(CoursesPage);
//export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); // you could do this.
