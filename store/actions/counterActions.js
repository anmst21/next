import { INCREMENT, DECREMENT, RESET } from "../types";

import * as _ from "lodash";

/////////////////////////////////////////////////

export const increment = () => async (dispatch, getState, api) => {
  dispatch({
    type: INCREMENT,
  });
};

////////////////////////////////////////////////

export const decrement = () => async (dispatch, getState, api) => {
  dispatch({
    type: DECREMENT,
  });
};

////////////////////////////////////////////////

export const reset = () => async (dispatch, getState, api) => {
  dispatch({
    type: RESET,
  });
};

////////////////////////////////////////////////
