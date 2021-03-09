import * as Types from "../constants/redux";
const initialState = {
  isload: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_LOADING:
      // console.log("action", action);
      return { ...state, isload: action.payload };

    default:
      return state;
  }
};
