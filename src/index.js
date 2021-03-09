import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import AlertSweet from "./common/AlertSweet";

import LoadingScreen from "./screen/LoadingScreen";
import NavigationScreen from "./screen/NavigationScreen";

const MainView = ({ isLoading, isShow }) => {
  // console.log("is loading", isLoading);
  // console.log("is show", isShow);
  return (
    <>
      {isLoading ? <LoadingScreen /> : null}
      {isShow.isShow ? <AlertSweet show={isShow.isShow} title={isShow.title} message={isShow.message}/> : null}
      <NavigationScreen />
    </>
  );
};
const mapStateToProps = (state) => ({
  isLoading: state.loading.isload,
  isShow: state.alertSweet,
});
const mapDispatchToProps = (dispatch) => ({});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(MainView);
