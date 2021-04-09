import React from "react";
import { useToastContext } from "../../Contexts/ToastContext/ToastContext";
import "./App.css";

function Toast() {
  const { state: {toast} } = useToastContext();
  const toastFun = (msg, alertType) => {
    if (alertType === "success")
      return (
        <div className="toast bg-toast-success">
          <i class="fas fa-check-circle"></i>
          <div className="toastInfo">
            <p>{alertType}</p>
            <p>{msg}</p>
          </div>
        </div>
      );
    else if (alertType == "danger") {
      return (
        <div className="toast bg-toast-danger">
          <i class="fas fa-exclamation-circle"></i>
          <div className="toastInfo">
            <p>{alertType}</p>
            <p>{msg}</p>
          </div>
        </div>
      );
    }
  };
  console.log(toast);
  return (
    <div>
      {toast.length > 0 &&
        toast.map((ele) => <>{toastFun(ele.msg, ele.alertType)}</>)}
    </div>
  );
}

export default Toast;
