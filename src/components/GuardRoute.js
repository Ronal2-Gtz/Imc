import React from "react";
import { Route, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  let isValid = true;

  try {
    isValid = jwt_decode(token);
  } catch (err) {
    return false;
  }
  return isValid;
};
const GuardRoute = (props) =>
  isAuthenticated() ? <Route {...props} /> : <Redirect to="/" />;

  export default GuardRoute;