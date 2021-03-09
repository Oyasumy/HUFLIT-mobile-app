import * as Types from "../constants/redux";
export const handleSetLoading = (payload) => ({
  type: Types.SET_LOADING,
  payload,
});
export const handleSetShowAlert = (yet, title, mess) => ({
  type: Types.IS_SHOW_ALERT,
  payload: {
    yet,
    title,
    mess,
  },
});
