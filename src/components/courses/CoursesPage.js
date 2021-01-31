import React from "react";
import { connect } from "react-redux";
import * as coursesActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadCourses().catch((error) => {
      alert("Loading courses failed" + error);
    });
  }

  render() {
    return (
      <>
        <h2>Courses</h2>

        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </>
    );
  }
}

CoursesPage.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  //createCourse: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
};

//function mapStateToProps(state, ownProps){
function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

// const mapDispatchToProps = {
//   createCourse: coursesActions.createCourse,
// };
function mapDispatchToProps(dispatch) {
  return {
    //createCourse: (course) => dispatch(coursesActions.createCourse(course)),
    actions: bindActionCreators(coursesActions, dispatch),
  };
}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
//const connectedStateAndProps = connect(mapStateToProps);

export default connectedStateAndProps(CoursesPage);
//export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); // you could do this.
