import * as Types from "../constants/home";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.SET_FINANCIAL_DATA:
      state = payload;

      return { ...state };

    default:
      return state;
  }
};
