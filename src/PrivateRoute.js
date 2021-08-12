import React from 'react'
import { Route, Navigate } from "react-router-dom";
import { useLoginContext } from './Contexts/loginRegistrationContext/loginRegistrationContext';
function PrivateRoute({ path, ...props }) {
    const { state: { userInfo }, } = useLoginContext()
   
  return userInfo.token ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
}
export default PrivateRoute
