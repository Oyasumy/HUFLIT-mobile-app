import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import TutorialScreen from "../screen/TutorialScreen";
import * as actionHome from "../actions/home";
import * as actionLoading from "../actions/Loading";

const NotificationContainer = ({ navigation, personal }) => {
  console.log("noti", personal);

  return (
    <>
      <TutorialScreen navigation={navigation} data={personal || {}} />
    </>
  );
};

const mapStateToProps = (state) => ({
  personal: state.personal,
  cookie: state.homeData.cookie,
});

const withConnect = connect(mapStateToProps, null);
export default compose(withConnect)(NotificationContainer);
