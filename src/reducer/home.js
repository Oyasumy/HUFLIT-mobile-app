import * as Types from "../constants/home";
const initialState = {
  cookie: "",
  message: {},
  notification: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_HOME_DATA:
      var { cookie, message, notification }=action.payload;
      // console.log("action", action);
      return { ...state, cookie, message, notification };

    default:
      return state;
  }
};
