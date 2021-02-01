import actionTypes from "./actionTypes";
import * as authorApi from "../../api/authorApi";

export function loadAuthorsSuccess(authors) {
  return {
    type: actionTypes.LOAD_AUTHORS_SUCCESS,
    authors,
  };
}

export function loadAuthors() {
  return async function (dispatch) {
    try {
      const authors = await authorApi.getAuthors();
      dispatch(loadAuthorsSuccess(authors));
    } catch (error) {
      throw error;
    }
  };
}
