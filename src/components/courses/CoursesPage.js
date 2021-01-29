import React from "react";
import { connect } from "react-redux";
import * as coursesActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       course: {
  //         title: "",
  //       },
  //     };

  state = {
    course: {
      title: "",
    },
  };

  //this.handleChange = this.handleChange.bind(this);

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //this.props.dispatch(coursesActions.createCourse(this.state.course));
    this.props.actions.createCourse(this.state.course);
    //alert(this.state.course.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
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
