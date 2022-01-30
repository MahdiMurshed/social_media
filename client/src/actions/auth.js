import * as api from "../api";
import * as actionType from "../constants/actionTypes";

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: actionType.AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
export const signIn = (formData, history) => async (dispatch) => {
  console.log("actions/signin.js");
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: actionType.AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
