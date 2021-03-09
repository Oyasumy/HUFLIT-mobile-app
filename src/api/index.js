import { API_URL } from "../constants/config";

const axios = require("axios").default;

// Check Login
export const checkLogin = async (data) => {
  var res = null;
  await axios
    .post(`${API_URL}/getApiHome`, data,{timeout:5000})
    .then((response) => {
      // console.log(response.data);
      // console.log(response.headers.cookie);
      var dataResponse = {
        data: response.data,
        cookie: response.headers.cookie,
      };
      res = dataResponse;
    })
    .catch((error) => {
      // console.log(error);
      return null;
    });
  return res;
};

// Get Personal information
export const getPersonalInformation = async (cookie) => {
  console.log("cookie", cookie);
  if (cookie===undefined) {
    return null
  }
  var res = null;
  await axios
  .get(`${API_URL}/getApiInformation`, {
    headers: {
      cookie: cookie,
    },
  })
    .then((response) => {
      res = response.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
  return res;
};

// Get Decision and Financial Data
export const getDecisionAndFinancialData = async (cookie) => {
  console.log("cookie", cookie);
  if (cookie===undefined) {
    return null
  }
  var res = null;
  await axios
  .get(`${API_URL}/getlast`, {
    headers: {
      cookie: cookie,
    },
  })
    .then((response) => {
      res = response.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
  return res;
};
// axios
// .post(`${API_URL}/getschedule`, data, {
//   headers: {
//     cookie: "ASP.NET_SessionId=xtta121fssx4dnfhot5rj3bv",
//   },
// })
// .then((response) => {
//   console.log(response);
// })
