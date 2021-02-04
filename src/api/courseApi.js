import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/courses/";

export function getCourses() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveCourse(course) {
  return fetch(baseUrl + course.id ? course.id : "")
    .then(handleResponse)
    .catch(handleError);
}
