import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

class CoursesPage extends React.Component {
  componentDidMount() {
    const { authors, courses, actions } = this.props;
    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursesPage.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  //createCourse: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
};

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
  };
}

// const mapDispatchToProps = {
//   createCourse: coursesActions.createCourse,
// };
function mapDispatchToProps(dispatch) {
  return {
    //createCourse: (course) => dispatch(coursesActions.createCourse(course)),
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
//const connectedStateAndProps = connect(mapStateToProps);

export default connectedStateAndProps(CoursesPage);
//export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); // you could do this.
