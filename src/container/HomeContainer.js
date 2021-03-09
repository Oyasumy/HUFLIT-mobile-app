import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
const axios = require("axios");
import HomeScreen from "../screen/HomeScreen";

// import action
import * as actionHome from "../actions/home";
import * as actionLoading from "../actions/Loading";

// import Api
import { getPersonalInformation } from "../api";

const HomeContainer = (props) => {
  var { navigation } = props;

  // state
  var { homeData, personal } = props;
  // action
  var { actionPersonal, actionLoad } = props;
  const { cookie } = homeData;
  // console.log("home", homeData);

  const loadData = async (cookie) => {
    var { handleSetPersonalData } = actionPersonal;
    var { handleSetLoading, handleSetShowAlert } = actionLoad;

    if (cookie === undefined) {
      setTimeout(() => {
        handleSetShowAlert(false, "", "");
      }, 2000);
          handleSetShowAlert(
            true,
            "hmm something went wrong!",
            "try login again"
          );
    }

    handleSetLoading(true);

    getPersonalInformation(cookie)
      .then((response) => {
        // console.log(response.data);
        handleSetPersonalData(response.data);
      })
      .then(() => {
        handleSetLoading(false);
      })
      .then(() => {
        navigation.push("PersonalScreen");
      })
      .catch(() => {
        handleSetLoading(false);
      });
  };

  const callApiPersonal = () => {
    console.log("personal");
    if (
      Object.keys(personal).length === 0 ||
      personal === null ||
      personal === undefined
    ) {
      console.log("load");
      loadData(cookie);
    }
    else{
      navigation.push("PersonalScreen");
    }
  };
  return (
    <>
      <HomeScreen
        navigation={navigation}
        notification={homeData.notification || {}}
        callApiPersonal={callApiPersonal}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  homeData: state.homeData,

  personal: state.personal,
});
const mapDispatchToProps = (dispatch) => ({
  actionPersonal: bindActionCreators({ ...actionHome }, dispatch),
  actionLoad: bindActionCreators({ ...actionLoading }, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(HomeContainer);
