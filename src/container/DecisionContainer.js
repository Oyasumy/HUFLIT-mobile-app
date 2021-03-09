import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as actionHome from "../actions/home";
import * as actionLoading from "../actions/Loading";
import { getDecisionAndFinancialData } from "../api";
import DecisionScreen from "../screen/DecisionScreen";

const DecisionContainer = ({ navigation, decision, cookie, actionLoad, actionSet }) => {
  var { handleSetLoading, handleSetShowAlert } = actionLoad;

  // console.log("decision", decision);

  useEffect(() => {
    if (decision.length > 0) return;

    getDecision(cookie);
  }, []);

  const getDecision = async (cookie) => {
    if (!cookie) return;

    handleSetLoading(true);

    await getDecisionAndFinancialData(cookie)
      .then((res) => {
        console.log("res", res);
        if (res?.studentDecision?.length >= 0) {
          actionSet.handleSetDecisionData(res.studentDecision);
          actionSet.handleSetFinancialData(res.fees);
        } else {
          setTimeout(() => {
            handleSetShowAlert(false, "", "");
          }, 2000);
          handleSetShowAlert(true, "Hmm something went wrong!", "Try again");
        }
        handleSetLoading(false);
      })
      .catch((err) => {
        handleSetLoading(false);

        setTimeout(() => {
          handleSetShowAlert(false, "", "");
        }, 2000);
        handleSetShowAlert(true, "Hmm something went wrong!", "Try again");

        throw new Error(err);
      });
  };
  return (
    <>
      <DecisionScreen navigation={navigation} data={decision || {}} />
    </>
  );
};

const mapStateToProps = (state) => ({
  decision: state.decision,
  cookie: state.homeData.cookie,
});
const mapDispatchToProps = (dispatch) => ({
  actionSet: bindActionCreators({ ...actionHome }, dispatch),
  actionLoad: bindActionCreators({ ...actionLoading }, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(DecisionContainer);
