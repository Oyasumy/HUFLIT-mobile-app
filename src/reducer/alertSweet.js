import * as Types from "../constants/redux";
const initialState = {
  isShow: false,
  title: "",
  message: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.IS_SHOW_ALERT:
      var { yet, title, mess } = action.payload;
      return { ...state, isShow: yet, title:title, message:mess };

    default:
      return state;
  }
};
