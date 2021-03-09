import * as Types from "../constants/home";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.SET_TUTORIAL_DATA:
      if (Object.keys(payload).length > 0) {
        state = payload;
      }
      return { ...state };

    default:
      return state;
  }
};
