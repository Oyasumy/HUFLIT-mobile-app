import * as Types from "../constants/home";

export const handleSetHomeData = (payload) => ({
  type: Types.SET_HOME_DATA,
  payload: payload,
});
export const handleSetPersonalData = (payload) => ({
  type: Types.SET_PERSONAL_DATA,
  payload: payload,
});
export const handleSetTutorialData = (payload) => ({
  type: Types.SET_TUTORIAL_DATA,
  payload: payload,
});
export const handleSetDecisionData = (payload) => ({
  type: Types.SET_DECISION_DATA,
  payload: payload,
});
export const handleSetFinancialData = (payload) => ({
  type: Types.SET_FINANCIAL_DATA,
  payload: payload,
});
