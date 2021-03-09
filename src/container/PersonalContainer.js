import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import PersonalScreen from "../screen/PersonalScreen";
import * as actionHome from "../actions/home";
import * as actionLoading from "../actions/Loading";

const PersonalContainer = ({ navigation, personal }) => {
  console.log("per", personal);

  return (
    <>
      <PersonalScreen navigation={navigation} data={personal || {}} />
    </>
  );
};

const mapStateToProps = (state) => ({
  personal: state.personal,
  cookie: state.homeData.cookie,
});

const withConnect = connect(mapStateToProps, null);
export default compose(withConnect)(PersonalContainer);
