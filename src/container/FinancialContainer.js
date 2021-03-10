import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as actionHome from "../actions/home";
import * as actionLoading from "../actions/Loading";
import { getDecisionAndFinancialData } from "../api";
import DecisionScreen from "../screen/DecisionScreen";
import FinancialScreen from "../screen/FinancialScreen";

const FinancialContainer = ({ navigation, financial, cookie, actionLoad, actionSet }) => {
  var { handleSetLoading, handleSetShowAlert } = actionLoad;

  // console.log("financial", financial);

  // console.log("new commit");
  useEffect(() => {
    if (financial?.data?.length > 0) return;

    getDecision(cookie);
  }, []);

  const getDecision = async (cookie) => {
    if (!cookie) return;

    handleSetLoading(true);

    await getDecisionAndFinancialData(cookie)
      .then((res) => {
        // console.log("res", res);
        if (res?.fees?.data?.length >= 0) {
          console.log("ok");
          actionSet.handleSetDecisionData(res.studentDecision);
          actionSet.handleSetFinancialData(res.fees);
        } else {
          // setTimeout(() => {
          //   handleSetShowAlert(false, "", "");
          // }, 2000);
          // handleSetShowAlert(true, "Hmm something went wrong!", "Try again");
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
      <FinancialScreen navigation={navigation} data={financial || {}} />
    </>
  );
};

const mapStateToProps = (state) => ({
  financial: state.financial,
  cookie: state.homeData.cookie,
});
const mapDispatchToProps = (dispatch) => ({
  actionSet: bindActionCreators({ ...actionHome }, dispatch),
  actionLoad: bindActionCreators({ ...actionLoading }, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(FinancialContainer);
