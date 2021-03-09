import { combineReducers } from "redux";
import loading from "./loading";
import alertSweet from "./alertSweet";
import homeData from "./home";
import personal from "./personal";
import tutorial from "./tutorial";
import decision from "./decision";
import financial from "./financial";
const rootReducer = combineReducers({
  loading,
  alertSweet,
  homeData,
  personal,
  tutorial,
  decision,
  financial,
});
export default rootReducer;
