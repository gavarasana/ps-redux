import actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

function actionTypeEndsInSucess(actionType) {
  const actionTypeLength = actionType.length;
  return (
    actionTypeLength > 8 &&
    actionType.substring(actionTypeLength - 8) === "_SUCCESS"
  );
}

export default function apiCallStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type === actionTypes.BEGIN_API_CALL) {
    return state + 1;
  } else if (
    action.type === actionTypes.API_CALL_ERROR ||
    actionTypeEndsInSucess(action.type)
  ) {
    return state - 1;
  }
  return state;
}
