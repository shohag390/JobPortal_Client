import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  console.log(location.pathname);

  if (!user) {
    return <Navigate to={"/sign-in"} state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
