import axios from "axios";
import Constants from "../Constants/Constants";

export const submitPayload = async (url, payload) => {
  return await axios
    .post(url, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(
      (response) => {
        return response;
      },
      (error) => {
        return error;
      }
    );
};

export const postApiCall = async (url, payload, callback) => {
  return await axios
    .post(url, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(
      (response) => {
        callback(response, Constants.SAVE_STORE);
      },
      (error) => {
        callback(error);
      }
    );
};

export const renderPayload = async (url) => {
  return await axios
    .get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(
      (response) => {
        console.log(response);
        return response;
      },
      (error) => {
        console.log(error);
        return error;
      }
    );
};

export const getApiCall = async (url, callback) => {
  return await axios
    .get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(
      (response) => {
        callback(response, Constants.GET_STORE);
      },
      (error) => {
        callback(error);
      }
    );
};
