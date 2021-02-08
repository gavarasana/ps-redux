import actionTypes from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadCoursesSuccess(courses) {
  return {
    type: actionTypes.LOAD_COURSES_SUCCESS,
    courses,
  };
}

export function createCourseSuccess(course) {
  return {
    type: actionTypes.CREATE_COURSE_SUCCESS,
    course,
  };
}

export function updateCourseSuccess(course) {
  return {
    type: actionTypes.UPDATE_COURSE_SUCCESS,
    course,
  };
}

export function deleteCourseOptimistic(course) {
  return {
    type: actionTypes.DELETE_OPTIMISTIC,
    course,
  };
}

export function loadCourses() {
  return async function (dispatch) {
    try {
      dispatch(beginApiCall());
      const courses = await courseApi.getCourses();
      dispatch(loadCoursesSuccess(courses));
    } catch (error) {
      dispatch(apiCallError());
      throw error;
    }
  };
}

export function saveCourse(course) {
  return async function (dispatch) {
    dispatch(beginApiCall());
    try {
      const savedCourse = await courseApi.saveCourse(course);
      if (course.id) {
        dispatch(updateCourseSuccess(savedCourse));
      } else {
        dispatch(createCourseSuccess(savedCourse));
      }
    } catch (error) {
      dispatch(apiCallError());
      throw error;
    }
  };
}

export function deleteCourse(course) {
  return function (dispatch) {
    dispatch(deleteCourseOptimistic(course));
    return courseApi.deleteCourse(course);
  };
}
