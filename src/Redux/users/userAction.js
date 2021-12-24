import axios from "axios";
import {
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
} from "./userTypes";
require("dotenv").config();
const API = process.env.REACT_APP_API_URL;

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const FetchUser = () => {
  return async (dispatch) => {
    dispatch(fetchUserRequest());
    let token = window.localStorage.getItem("userdata").split("~")[2];
    try {
      const response = await axios.get(`${API}/get/users`, {
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      const users = response.data;

      dispatch(fetchUserSuccess(users));
    } catch (error) {
      dispatch(fetchUserFailure(error.message));
    }
  };
};
