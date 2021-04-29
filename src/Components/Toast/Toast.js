import React from "react";
import { useToastContext } from "../../Contexts/ToastContext/ToastContext";
import "./App.css";

function Toast() {
  const {
    state: { toast },
  } = useToastContext();
  const toastFun = (msg, alertType) => {
    if (alertType === "success")
      return (
        <div className="toast toast-fitt bg-toast-success">
          <i className="fas fa-check-circle"></i>
          <div className="toastInfo">
            <p>{alertType}</p>
            <p>{msg}</p>
          </div>
        </div>
      );
    else if (alertType == "danger") {
      return (
        <div className="toast toast-fitt bg-toast-danger">
          <i className="fas fa-exclamation-circle"></i>
          <div className="toastInfo">
            <p>{alertType}</p>
            <p>{msg}</p>
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      {toast.length > 0 &&
        toast.map((ele) => <>{toastFun(ele.msg, ele.alertType)}</>)}
    </div>
  );
}

export default Toast;
