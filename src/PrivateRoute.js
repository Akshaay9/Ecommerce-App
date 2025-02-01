import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useLoginContext } from "./Contexts/loginRegistrationContext/loginRegistrationContext";

const PrivateRoute = () => {
  const {
    state: { userInfo },
  } = useLoginContext();

  return userInfo?.token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
