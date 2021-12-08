import React from "react";
import ReactDOM from "react-dom";

function ChangePasswordModal({ closeChangePasswordModal }) {
  return ReactDOM.createPortal(
    <div className="modalBackGround">
      <div className="modalContainer glass modalCard">
        <div className="title">
          <h1>Password</h1>
        </div>
        <div className="body flex-col">
          <input type="text" placeholder="Enter new password" />
          {/* {error === "" ? (
            ""
          ) : (
            <span className="text-sm block text-red-500">{error}</span>
          )} */}
        </div>
        <div className="body flex-col">
          <input type="text" placeholder="confirm password" />
          {/* {error === "" ? (
            ""
          ) : (
            <span className="text-sm block text-red-500">{error}</span>
          )} */}
        </div>
        <div className="footer">
          <button
            className="btn-gradient"
            onClick={() => closeChangePasswordModal(false)}
          >
            Cancel
          </button>
          <button className="btn-gradient">Continue</button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default ChangePasswordModal;
